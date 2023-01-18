import nodemailer from 'nodemailer';
import express from 'express';
import dotenv from 'dotenv';
import crypto from 'crypto';
import fetch from 'node-fetch';
import cors from 'cors';

dotenv.config(process.env.ENV_PATH ? {path:process.env.ENV_PATH} : undefined);

import subscribe from './templates/subscribe.js';
import register from './templates/register.js';
import ticket from './templates/ticket.js';

import { exec } from 'child_process';
import { runInThisContext } from 'vm';
import { create } from 'domain';

const config = {
    accountName: 'Hack OC',
    accountEmail: 'noreply@hackoc.org',
    accountPassword: process.env.EMAIL_PASSWORD,
    mailServer: {
        host: 'smtp.gmail.com',
        post: 465,
        secure: true
    },
    replyTo: 'team@hackoc.org',
    messages: {
        subscribe,
        register,
        ticket
    }
};

const transporter = nodemailer.createTransport({
    auth: {
        user: config.accountEmail,
        pass: config.accountPassword
    },
    ...config.mailServer
});

async function send (data, { template, subject, text }) {
    let info = await transporter.sendMail({
        from: `"${config.accountName}" <${config.accountEmail}>`,
        to: data.email, // list of receivers
        subject: subject(),
        text: text(data),
        html: template(data),
        replyTo: config.replyTo
    });
    return info;
}

const app = express();
app.use(express.json({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to the Hack OC Mailroom! Hack OC Mailroom powers all of our email services, like our mailing list, registrations, vaccine verification, and test verification. I\'m also open source! Check out https://github.com/hackoc/mail.');
});

app.use('/v1/authed', (req, res, next) => {
    const auth = req.header('Authorization');
    const valid = auth?.startsWith('Bearer hoc-m-') && ('HOC-M-' + crypto.createHash('sha512').update(auth.substring(13)).digest('hex')).toUpperCase() == process.env.API_KEY_HASH;
    if (!valid) return res.status(401).send('Unauthorized');
    next();
});

app.get('/v1/authed', (req, res) => {
    res.send('Authed');
});

app.get('/v1/authed/templates', (req, res) => {
	res.json(Object.keys(config.messages));
});

app.get('/v1/authed/templates/:template', (req, res) => {
	const { template } = req.params;
	if (!config.messages[template]) return res.json({ error: "Template not found" });

	return res.json({ required: config.messages[template].required });
});

app.post('/v1/authed/deliver/:message', async (req, res) => {
    const { message } = req.params;
    if (!config.messages[message]) return res.status(404).send('Message not found');
    const template = config.messages[message];
    const { data } = req.body;
    if (!data) return res.status(400).send('Missing "data" property on JSON');
    const results = await send(data, template);
    res.json(results);
});

app.get('/v1/unauthed', (req, res) => {
    res.send('No authentication needed.');
});

app.get('/v1/unauthed/subscribe/webhook', async (req, res) => {
    const response = await fetch('https://api.airtable.com/v0/appYlvRWZObGXXGOh/Emails?maxRecords=3&view=Grid%20view&sort%5B0%5D%5Bfield%5D=ID&sort%5B0%5D%5Bdirection%5D=desc&maxRecords=100&pageSize=100', {
        headers: {
            Authorization: 'Bearer ' + process.env.AIRTABLE_KEY
        }
    });
    const { records } = await response.json();
    let emailsSent = 0;
    for (const record of records.filter(record => !record?.fields?.Notification)) {
        const email = record?.fields?.Email;
        const id = record?.id;
        try {
            await send({ email }, config.messages.subscribe);
            emailsSent += 1;
            const output = await fetch('https://api.airtable.com/v0/appYlvRWZObGXXGOh/Emails', {
                method: 'PATCH',
                headers: {
                    Authorization: 'Bearer ' + process.env.AIRTABLE_KEY,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    records: [
                        {
                            id,
                            fields: {
                                Notification: true
                            }
                        }
                    ]
                })
            });
            await output.json();
        } catch (err) {
            console.error(err);
        }
    }
    res.send(`${emailsSent} email(s) sent out.`);
});

app.get('/v1/webhook', (req, res) => {
    res.redirect(`http://mail2.hackoc.org:8081/v1/unauthed/subscribe/webhook`);
});

app.listen(process.env.PORT ?? 8081, () => {
    console.log(`Listening on *:${process.env.PORT ?? 8081}`);
});

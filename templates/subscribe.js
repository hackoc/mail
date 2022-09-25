import crypto from 'crypto';


export const template = ({ email }) => `Thanks for subscribing to Hack OC! We're almost ready to announce a date and open up registrations, so expect an email from us in the near future. For now, you can <a href="https://hackoc.org/discord">join our Discord server</a> and chat with other participants. Also check out our Instagram, <a href="https://instagram.com/hack.oc">@hack.oc</a>.
<br/>
<br/>
Cheers,
<br/>
Ian & the Hack OC team
<br/>
<a href="https://hackoc.org">
<img src="https://hackoc.org/logo-full-light.png" width="300" />
</a>
<br/>
<br/>
<small>We value your privacy and we'll never track whether you read or open our emails.<br /><a href="https://hackoc.org/unsubscribe/${crypto.createHash('sha256').update(email).digest('hex')}">Unsubscribe</a></small>`;


export const text = ({ email }) => `Thanks for subscribing to Hack OC! We're almost ready to announce a date and open up registrations, so expect an email from us in the near future. For now, you can join our Discord server (https://hackoc.org/discord) and chat with other participants. Also check out our Instagram, @hack.oc (https://instagram.com/hack.oc).

Cheers,

Ian & the Hack OC team

-----
We value your privacy and we'll never track whether you read or open our emails.
Unsubscribe: https://hackoc.org/unsubscribe/${crypto.createHash('sha256').update(email).digest('hex')}`;


export const subject = () => `Something's stirring up in Orange County!`;


export default { template, subject, text }
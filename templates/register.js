import crypto from 'crypto';


export const template = ({ firstName }) => `You're all set, ${firstName}! We'll reach out to you soon to verify your COVID-19 vaccination and prove your negative test.
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
<small>We value your privacy and we'll never track whether you read or open our emails.</small>`;


export const text = ({ firstName }) => `You're all set, ${firstName}! We'll reach out to you soon to verify your COVID-19 vaccination and prove your negative test.

Cheers,

Ian & the Hack OC team

-----
We value your privacy and we'll never track whether you read or open our emails.`;

export const subject = () => `Thanks for registering for Hack OC!`;


export default { template, subject, text }
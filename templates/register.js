export const required = ["firstName"];

export const template = ({ firstName }) => `Thanks for registering, ${firstName}! We'll reach out to you soon to sign the event liability waiver. In the meantime, join our <a href="https://hackoc.org/dis
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

export const text = ({ firstName }) => `Thanks for registering, ${firstName}! We'll reach out to you soon to sign the event liability waiver. In the meantime, join our Discord server (https://hackoc.org/
Cheers,
Ian & the Hack OC team
-----
We value your privacy and we'll never track whether you read or open our emails.`;

export const subject = () => `Thanks for registering for Hack OC!`;

export default { template, subject, text, required }

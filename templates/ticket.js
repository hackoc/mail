export const required = ["firstName", "imageLink"];

export const template = ({ firstName, imageLink }) => `A Hack OC ticket for ${firstName} has appeared! Your vaccination status and COVID-19 test have been verified.
<br/>
<br/>
<center>
<img src="${imageLink}" style="width: 500px; max-width: 100%;" />
<br />
<small>This is your ticket, ${firstName}. Don't share it with anyone else!</small>
</center>
<br/>
<br/>
You'll use this ticket to get into the event, so we recomend you take a screenshot or save the image.
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


export const text = ({ firstName, imageLink }) => `A Hack OC ticket for ${firstName} has appeared! Your vaccination status and COVID-19 test have been verified.

You can download it here: ${imageLink}
This is your ticket, ${firstName}. Don't share it with anyone else!

You'll use this ticket to get into the event, so we recomend you take a screenshot or save the image.


Cheers,
Ian & the Hack OC team

-----
We value your privacy and we'll never track whether you read or open our emails.`;

export const subject = () => `Your Hack OC ticket is here!`;


export default { template, subject, text, required }

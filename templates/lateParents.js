export const required = ["firstName"];

export const template = ({ firstName }) => `<p><span style="font-family:Helvetica Neue;">Hi, ${firstName}!</span></p>

<p><span style="font-family:Helvetica Neue;">We've emailed you your waiver! Please check your inbox for an email from Envoy (<a href="mailto:no-reply@envoy.com">no-reply@envoy.com</a>). While you can also sign the waiver in person on the day of the event, we highly recommend pre-checking in through Envoy to save time. If you are a minor, please make sure to have your parent or guardian sign the waiver for you. We can't wait to have you join us Saturday at Anduril's HQ (3370 Harbor Blvd. Costa Mesa, CA).</span></p>

<p><span style="font-family:Helvetica Neue;">We'll be providing additional information in the days ahead. If you have any questions or concerns, please don't hesitate to reach out to us on&nbsp;<a href="https://hackoc.org/discord">Discord</a>, <a href="https://instagram.com/hack.oc">Instagram</a>, or at <a href="mailto:team@hackoc.org">team@hackoc.org</a>. We're here to help!</span></p>

<p><span style="font-family:Helvetica Neue;">Looking forward to seeing you soon!</span></p>

<p><span style="font-family:Helvetica Neue;"><img alt="Hack OC Logo" src="https://hackoc.org/logo-full-light.png" style="width: 283px; height: 90px;"></span></p>

<p>&nbsp;</p>

<p><span style="font-family:Helvetica Neue;"><small>You're getting this email because you are registered to attend&nbsp;Hack OC this Saturday, May 6th.</small></span></p>
`;


export const text = ({ firstName }) => `Hi, ${firstName}!

We've emailed you your waiver! Please check your inbox for an email from Envoy (no-reply@envoy.com). While you can also sign the waiver in person on the day of the event, we highly recommend pre-checking in through Envoy to save time. If you are a minor, please make sure to have your parent or guardian sign the waiver for you. We can't wait to have you join us Saturday at Anduril's HQ (3370 Harbor Blvd. Costa Mesa, CA).

We'll be providing additional information in the days ahead. If you have any questions or concerns, please don't hesitate to reach out to us on Discord, Instagram, or at team@hackoc.org. We're here to help!

Looking forward to seeing you soon!

=========================

You're getting this email because you are registered to attend Hack OC this Saturday, May 6th.`;

export const subject = () => `Action Required: Sign Hack OC's Event Liability Release`;


export default { template, subject, text, required }

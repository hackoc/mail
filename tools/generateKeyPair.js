import crypto from 'crypto';

const randomBytes = crypto.randomBytes(64).toString('hex');
const hash = crypto.createHash('sha512').update(randomBytes).digest('hex');

console.log(`API key:           hoc-m-${randomBytes}\nServer-side hash:  HOC-M-${hash.toUpperCase()}`);
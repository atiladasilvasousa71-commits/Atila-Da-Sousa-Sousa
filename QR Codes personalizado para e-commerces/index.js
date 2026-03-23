const qrcode = require('qrcode-terminal');
const prompt = require('prompt-sync')();

const link = prompt('Digite o link do produto: ');

qrcode.generate(link, { small: true });

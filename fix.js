const fs = require('fs');
const path = require('path');
const dir = 'c:/Users/pc/Downloads/lifewood-website-redesign/components/lifewood';

fs.readdirSync(dir).forEach(file => {
    if (!file.endsWith('.jsx')) return;
    const p = path.join(dir, file);
    let cnt = fs.readFileSync(p, 'utf8');
    cnt = cnt.replace(/lw-\//g, 'lw-green/');
    cnt = cnt.replace(/lw- /g, 'lw-green ');
    cnt = cnt.replace(/text-lw-/g, 'text-lw-green');
    cnt = cnt.replace(/bg-lw-/g, 'bg-lw-green');
    cnt = cnt.replace(/border-lw-/g, 'border-lw-green');
    cnt = cnt.replace(/fill-lw-/g, 'fill-lw-green');
    cnt = cnt.replace(/lw-"/g, 'lw-green"');
    cnt = cnt.replace(/lw-'/g, 'lw-green\'');
    cnt = cnt.replace(/lw-`/g, 'lw-green`');
    fs.writeFileSync(p, cnt);
});
console.log('Fixed!');

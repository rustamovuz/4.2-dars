//1
// const { add,subtrac } = require("./math");
// console.log(add(5,6),subtrac(4,5));
// const fs = require("fs");

//amaliyot
// fs.mkdir("__int_tests__", { recursive: true }, (err) => { if (err) throw err; });
// fs.mkdir("__mocks__", { recursive: true }, (err) => { if (err) throw err; });
// fs.mkdir("__tests__", { recursive: true }, (err) => { if (err) throw err; });
// fs.mkdir("coverage", { recursive: true }, (err) => { if (err) throw err; });
// fs.mkdir("dist", { recursive: true }, (err) => { if (err) throw err; });
// fs.mkdir("docs/api", { recursive: true }, (err) => { if (err) throw err; });
// fs.mkdir("public", { recursive: true }, (err) => { if (err) throw err; });
// fs.mkdir("scripts/deployment", { recursive: true }, (err) => { if (err) throw err; });
// fs.mkdir("src", { recursive: true }, (err) => { 
//     if (err) throw err; 
//     console.log("Struktura tayyor!");
// });

//2
// const fs = require('fs');
// fs.writeFileSync('salom.txt', 'Salom, dunyo!');
// const maulumot = fs.readFileSync('salom.txt', 'utf8');
// console.log(maulumot);


//3
// const fs = require('fs');
// const tasodifiyRaqamlar = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
// const bufferMaulumot = Buffer.from(tasodifiyRaqamlar.toString());
// fs.writeFileSync('data.bin', bufferMaulumot);
// const oqilganBuffer = fs.readFileSync('data.bin');
// console.log(oqilganBuffer.toString());

//4
// const fs = require('fs');
// const path = require('path');
// fs.mkdirSync('html', { recursive: true });
// fs.mkdirSync('static', { recursive: true });

// fs.writeFileSync(path.join('html', 'index.html'), '');
// fs.writeFileSync(path.join('static', 'script.js'), '');
// fs.writeFileSync(path.join('static', 'script.ts'), '');
// fs.writeFileSync(path.join('static', 'style.css'), '');

// fs.writeFileSync('go.mod', '');
// fs.writeFileSync('go.sum', '');
// fs.writeFileSync('golang-todo-app', '');
// fs.writeFileSync('main.go', '');
// fs.writeFileSync('README.md', '');
// fs.writeFileSync('tsconfig.json', '');

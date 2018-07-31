

const fs = require('fs'),  
hljs = require('highlight.js'),
file = process.argv[2],
// lang = process.argv[3],
lang='html'
pathDir = "./src/assets/examples/"
htmlPath = `${pathDir}/${file}/${file}.component.html`
tsPath = `${pathDir}/${file}/${file}.component.ts`
htmlData = fs.readFileSync(htmlPath);
tsData = fs.readFileSync(tsPath);

var htmlCode = htmlData.toString();
var tsCode = tsData.toString()
// console.log(hljs.highlight('html', htmlCode).value);
// console.log(hljs.highlight('typescript', tsCode).value)

const htmlExamplePath = `${pathDir}/${file}/${file}.example.html`
const tsExamplePath = `${pathDir}/${file}/${file}.example.ts.html`


//write back to toolkit
fs.writeFileSync(htmlExamplePath, hljs.highlight('html', htmlCode).value)
fs.writeFileSync(tsExamplePath, hljs.highlight('typescript', tsCode).value)

console.log('done')
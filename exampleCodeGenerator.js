const fs = require('fs'),
  hljs = require('highlight.js'),
  file = process.argv[2];
// lang = process.argv[3],
function generateCodeStyle(file) {
  lang = 'html';
  pathDir = './src/assets/examples/';
  htmlPath = `${pathDir}/${file}/${file}.component.html`;
  tsPath = `${pathDir}/${file}/${file}.component.ts`;
  cssPath = `${pathDir}/${file}/${file}.component.css`;
  scssPath = `${pathDir}/${file}/${file}.component.scss`;
  type = 'css';

  htmlData = fs.readFileSync(htmlPath);
  tsData = fs.readFileSync(tsPath);
  if (fs.existsSync(cssPath)) {
    cssData = fs.readFileSync(cssPath);
  }
  if (fs.existsSync(scssPath)) {
    cssData = fs.readFileSync(scssPath);
  }

  var htmlCode = htmlData.toString();
  var tsCode = tsData.toString();
  var cssCode = cssData.toString();

  // console.log(hljs.highlight('html', htmlCode).value);
  // console.log(hljs.highlight('typescript', tsCode).value)

  const htmlExamplePath = `${pathDir}/${file}/${file}.example.html`;
  const tsExamplePath = `${pathDir}/${file}/${file}.example.ts.html`;
  const cssExamplePath = `${pathDir}/${file}/${file}.example.css.html`;

  //write back to toolkit
  fs.writeFileSync(htmlExamplePath, hljs.highlight('html', htmlCode).value);
  fs.writeFileSync(tsExamplePath, hljs.highlight('typescript', tsCode).value);
  fs.writeFileSync(cssExamplePath, hljs.highlight(type, cssCode).value);
}
generateCodeStyle(file)

// const files = fs.readdir('./src/assets/examples', (error, files) => {
//   files.forEach(fname => {
//     if (fs.lstatSync('./src/assets/examples/' + fname).isDirectory()) {
//       generateCodeStyle(fname);
//     }
//   });
// });

console.log('done');

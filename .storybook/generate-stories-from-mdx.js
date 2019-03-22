const fs = require('fs');
const parseMD = require('marked');
const path = require('path');


console.log("This file is only meant to be called once for the initial generation. If you know what you are doing, remove the following line");
console.log("TODO: add parameter to allow single file generation. (If neeeded)");
process.exit();

const go1dComponentWhitelist = [];
function crawlDir(dir){
  var files = fs.readdirSync(dir);
  for(var x in files){
    var next = path.join(dir,files[x]);
    if(fs.lstatSync(next).isDirectory()==true){
      go1dComponentWhitelist.push(files[x]);
      crawlDir(next);
    }
  }
}
// read all existing component names into go1dComponents (recursively go into all folders), can include folder names which are not components.
crawlDir(path.resolve(__dirname,'../src/components/'));


// This condition actually should detect if it's an Node environment
if (typeof require.context === 'undefined') {
  require.context = (base = '.', scanSubDirectories = false, regularExpression = /\.js$/) => {
    const files = {};

    function readDirectory(directory) {
      fs.readdirSync(directory).forEach((file) => {
        const fullPath = path.resolve(directory, file);

        if (fs.statSync(fullPath).isDirectory()) {
          if (scanSubDirectories) readDirectory(fullPath);

          return;
        }

        if (!regularExpression.test(fullPath)) return;

        files[fullPath] = true;
      });
    }

    readDirectory(path.resolve(__dirname, base));

    function Module(file) {
      return require(file);
    }

    Module.keys = () => Object.keys(files);

    return Module;
  };
}

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};


const req = require.context('../docs/components/', true, /.md/);
req.keys().forEach(filename =>{

  const data= parseMD.lexer(fs.readFileSync(filename,'utf8') );

  // Example fileName /mnt/d/Workspace/GO1D/docs/components/rich-text-input.md and apply PascalCase transformation of the name
  const componentName = filename.split('/').pop().split('.')[0].split('-').map(part => part.capitalize()).join('');
  let fileContent = "import React from 'react'; \n"+
    "import {storiesOf} from '@storybook/react'; \n";
  let lastHeading = "";
  const examples = [];
  const componentsToImport = {};

  // parse file for imported components and examples
  data.forEach(line => {
    componentsToImport[componentName] = true;
    if (line.type === 'heading') {
      lastHeading = line.text; // used as name for example
    }
    if (line.type === 'code' && line.text.indexOf('ComponentDoc') === -1) {
      const pattern = /<([a-zA-Z]+)/g;
      let matches;
      while (matches = pattern.exec(line.text)) {
        const parsedComponentName = matches[1].replace("<", "");
        componentsToImport[parsedComponentName] = true;
      }
      examples.push( {title: lastHeading, code: line.text});
    }
  });

  // filter out none GO1D components like "div", "a", "center" etc.
  const componentsToImportArray = Object.keys(componentsToImport).filter(val => {
    if (go1dComponentWhitelist.includes(val)) return true;
  });

  // Skip docs which doesn't include any go1d components
  if (componentsToImportArray.length === 0) return false;

  fileContent +="import {"+componentsToImportArray.join(',')+"} from '../src'; \n";

  fileContent +="storiesOf(\""+componentName+"\", module) \n";

  examples.forEach((example) => {
    fileContent += ".add('"+example.title.replace(/'/g,"\'")+"', () => "+example.code+") \n";
  })

  const savePath = path.resolve(__dirname,'../stories')+"/"+componentName+".story.js";

  if (!fs.existsSync(savePath)) {
    fs.writeFile(savePath, fileContent, function (err) {
      if (err) {
        return console.log(err);
      }
    });
  } else {
    console.log("Skipped: "+componentName);
  }


});

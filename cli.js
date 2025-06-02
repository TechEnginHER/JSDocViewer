#!/usr/bin/env node

const { Command } = require('commander');
const parseDocs = require('./parser');
const generateMarkdown = require('./markdownGenerator');
const startServer = require('./server');


const program = new Command();

program
  .version('1.0.0')
  .description('JSDocViewer CLI')
  .requiredOption('-f, --file <path>', 'JavaScript file or folder')
  .option('-s, --serve', 'Serve output via Express')
  .parse(process.argv);

const options = program.opts();

async function main() {
  const jsdocData = await parseDocs(options.file);
  generateMarkdown(jsdocData);
    
  if (options.serve) {
    startServer();
  }
}

main();

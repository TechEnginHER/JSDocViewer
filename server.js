const express = require('express');
const fs = require('fs');
const path = require('path');
const marked = require('marked');
const hljs = require('highlight.js');

const app = express();
const PORT = 3000;

// Setup Markdown renderer with syntax highlighting
marked.setOptions({
  highlight: (code, lang) => {
    return hljs.highlightAuto(code, [lang]).value;
  },
});

app.get('/', (req, res) => {
  const docPath = path.join(__dirname, 'output', 'docs.md');

  if (!fs.existsSync(docPath)) {
    return res.send('<h1>No documentation found. Run the CLI first!</h1>');
  }

  const markdown = fs.readFileSync(docPath, 'utf-8');
  const htmlContent = marked.parse(markdown);

  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>DevDocs Navigator</title>
      <style>
        body { font-family: sans-serif; padding: 2rem; line-height: 1.6; max-width: 800px; margin: auto; }
        pre { background: #f4f4f4; padding: 10px; overflow: auto; }
        code { background: #eee; padding: 2px 4px; border-radius: 4px; }
        h1, h2, h3 { color: #222; }
      </style>
      <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github.min.css">
    </head>
    <body>
      ${htmlContent}
    </body>
    </html>
  `);
});

module.exports = function startServer() {
  app.listen(PORT, () => {
    console.log(`🚀 Docs preview available at http://localhost:${PORT}`);
  });
};

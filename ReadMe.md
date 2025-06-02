# 🧭 JSDocView

**A lightweight Node.js CLI tool turns your JSDoc comments into clean readable Markdown documentation and also lets you  preview it in your browser.**

**It extracts JSDoc comments directly from your source files and converts them into well-structured Markdown documentation**

**Built for JavaScript developers who care about clear documentation and a better developer experience.**

---

## 🚀 Features

- 📂 **CLI Input** – Specify a single JS file or entire folder  
- 🔍 **JSDoc Parsing** – Uses `jsdoc-api` to extract doc blocks  
- 📝 **Markdown Generator** – Formats output with descriptions, parameters and returns  
- 🌐 **Express Preview** – Launches a clean browser UI for your docs  
- 🎨 **Syntax Highlighting** – Powered by `highlight.js` and `marked`  
- 🧠 **Beginner-Friendly** – Simple setup, no config needed

---

## 📦 Installation
    git clone https://github.com/TechEnginHER/JSDocViewer.git
    cd JSDocViewer
    npm install
---

## 🛠 Usage
🔹 Generate Markdown Only: 
Extracts JSDoc comments from a JavaScript file or folder and saves them as Markdown in /output/docs.md.

    node cli.js --file example/sample.js
 
🔹 Generate & Preview in Browser: 
Launches a local Express server and renders your Markdown documentation at http://localhost:3000.
   
    node cli.js --file example/sample.js --serve

---

## 📁 File Structure

        JSDocViewer/
        ├── cli.js                # CLI entry point
        ├── parser.js             # Extract JSDoc from files
        ├── markdownGenerator.js  # Converts parsed JSDoc to Markdown
        ├── server.js             # Express server to preview docs
        ├── example/              # Sample JavaScript files to test
        ├── output/               # Generated Markdown output
        ├── README.md             # This file

---

## 🔗 Technologies
JavaScript (Node.js)

JSDoc

Commander (CLI)

Express.js

Marked (Markdown to HTML)

Highlight.js (Syntax highlighting)

---

## ⭐️ Contribute
Ideas, issues or pull requests

---

## 📃 License
MIT — free to use, modify and share.

const fs = require('fs');
const path = require('path');

/**
 * Converts JSDoc data to Markdown and writes it to /output folder
 * @param {Array} jsdocData
 */
function generateMarkdown(jsdocData) {
  const docs = jsdocData.filter(entry => entry.kind === 'function');

  let markdown = `# API Documentation\n\n`;

  docs.forEach(doc => {
    markdown += `## ${doc.name}\n\n`;
    markdown += `${doc.description}\n\n`;

    if (doc.params && doc.params.length > 0) {
      markdown += `**Parameters:**\n\n`;
      doc.params.forEach(param => {
        markdown += `- \`${param.name}\` (${param.type.names.join(', ')}): ${param.description}\n`;
      });
      markdown += `\n`;
    }

    if (doc.returns && doc.returns.length > 0) {
      markdown += `**Returns:**\n\n`;
      doc.returns.forEach(ret => {
        markdown += `- (${ret.type.names.join(', ')}): ${ret.description}\n`;
      });
      markdown += `\n`;
    }

    markdown += `---\n\n`;
  });

  // Ensure output folder exists
  const outputDir = path.join(__dirname, 'output');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  const filePath = path.join(outputDir, 'docs.md');
  fs.writeFileSync(filePath, markdown);
  console.log(`✅ Markdown generated at: ${filePath}`);
}

module.exports = generateMarkdown;

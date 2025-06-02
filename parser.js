const jsdoc = require('jsdoc-api');
const path = require('path');
const fs = require('fs');

/**
 * Parse JSDoc comments from a file or directory.
 * @param {string} filePath - Path to JS file or folder
 * @returns {Promise<Array>} - Array of JSDoc data objects
 */
async function parseDocs(filePath) {
  try {
    // Resolve path
    const fullPath = path.resolve(filePath);

    // If it's a folder, get all .js files
    let files = [];
    const stats = fs.statSync(fullPath);
    if (stats.isDirectory()) {
      files = fs.readdirSync(fullPath)
        .filter(f => f.endsWith('.js'))
        .map(f => path.join(fullPath, f));
    } else {
      files = [fullPath];
    }

    // Parse each file
    const results = [];
    for (const file of files) {
      const data = await jsdoc.explain({ files: file });
      results.push(...data);
    }

    return results;
  } catch (error) {
    console.error('Error parsing JSDoc:', error);
    return [];
  }
}

module.exports = parseDocs;

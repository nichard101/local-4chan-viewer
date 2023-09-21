const folderPath = process.argv.slice(2)[0]; 

const fs = require('fs');
const path = require('path');

function listFiles(folderPath, outputPath, targetExtension, excludedWord) {
  const output = [];

  function traverseFolder(folderPath) {
    const files = fs.readdirSync(folderPath);
    for (const file of files) {
      const filePath = path.join(folderPath, file);
      const isDirectory = fs.statSync(filePath).isDirectory();
      if (isDirectory) {
        traverseFolder(filePath);
      } else {
        const fileName = path.basename(filePath);
        const fileExtension = path.extname(filePath).toLowerCase();
        if (fileExtension === targetExtension && !fileName.includes(excludedWord)) {
          output.push(filePath);
        }
      }
    }
  }

  traverseFolder(folderPath);

  // Write the filtered file paths to the specified file
  fs.writeFileSync(outputPath, output.join('\n'));
}

const outputPath = 'output.txt';
const targetExtension = '.html'; // Change this to the desired file extension
const excludedWord = 'syncframe'; // Change this to the word you want to exclude

console.log(`Listing ${targetExtension} files in folder: ${folderPath}`);
listFiles(folderPath, outputPath, targetExtension, excludedWord);
console.log(`Filtered output saved to ${outputPath}`);
const fs = require('fs');

function readSpecificLine(filePath, lineNumber) {
    const content = fs.readFileSync(filePath, 'utf-8').split('\n');
    const line = content[lineNumber - 1];
    return line ? line : 'Line not found';
}

function readEntireFile(filePath) {
    return fs.readFileSync(filePath, 'utf-8');
}

module.exports = {
    readSpecificLine,
    readEntireFile,
};

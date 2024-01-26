const express = require('express');
const fs = require('fs');

const filecontoller = require('../controllers/filecontroller');

const router = express.Router();

router.get('/', (req, res) => {
    const fileName = req.query.n;
    const lineNumber = req.query.m;

    if (!fileName) {
        return res.status(400).json({ error: 'File name (n) is required' });
    }

  const filePath = `tmp/data/${fileName}.txt`;


    if (!fs.existsSync(filePath)) {
        return res.status(404).json({ error: 'File not found' });
    }

    if (lineNumber) {
        const content = filecontoller.readSpecificLine(filePath, lineNumber);
        res.send(content);
    } else {
        const content = filecontoller.readEntireFile(filePath);
        res.send(content);
    }
});

module.exports = router;

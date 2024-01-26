const express = require('express');
const fileroute = require('./Routes/fileroute');

const app = express();
const port = 8080;

app.use('/data', fileroute);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

const express = require('express');
const os = require('os');
const path = require('path');

const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/hostname', (req, res) => {
    const podHostname = os.hostname();
    const nodeName = process.env.NODE_NAME || 'Unknown';
    res.send(`Your app is running in Pod: ${podHostname}\n\nThe Pod is running on node: ${nodeName}`);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

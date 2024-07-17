// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

let calls = [
    // Initial data
];

app.get('/calls', (req, res) => {
    res.json(calls);
});

app.post('/archive', (req, res) => {
    const { id } = req.body;
    calls = calls.map(call => call.id === id ? { ...call, archived: true } : call);
    res.json({ success: true });
});

app.post('/unarchive', (req, res) => {
    const { id } = req.body;
    calls = calls.map(call => call.id === id ? { ...call, archived: false } : call);
    res.json({ success: true });
});

app.post('/archive-all', (req, res) => {
    calls = calls.map(call => ({ ...call, archived: true }));
    res.json({ success: true });
});

app.post('/unarchive-all', (req, res) => {
    calls = calls.map(call => ({ ...call, archived: false }));
    res.json({ success: true });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

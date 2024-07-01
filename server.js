const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, "/")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './three_html/index.html'));
});

const PORT = 5173;
app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
});

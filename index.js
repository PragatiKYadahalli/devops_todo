// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('TODO App is running!'));
app.listen(PORT, () => console.log(`App is running on port ${PORT}`));


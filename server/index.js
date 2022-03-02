const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('../client/build'));

app.get('/api/map', (req, res) => {
    res.send('Tyt mozet bit vasha karta.');
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

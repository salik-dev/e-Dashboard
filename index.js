const express = require('express');
require('./db/config');
const User = require('./db/userSchema');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Server is Live!');
});

app.post('/register', async (req, res) => {
    let user = new User(req.body);
    let result = await user.save();
    console.log(req.body);
    res.send(req.body);
});

app.listen(4500);
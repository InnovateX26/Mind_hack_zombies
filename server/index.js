const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDb = require('./config/connectDb');

dotenv.config();

connectDb();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Server is running' });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});

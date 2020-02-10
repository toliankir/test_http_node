const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

mongoose.connect('mongodb+srv://testuser:1234@cluster0-a9o86.mongodb.net/test?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, err => {
        if (err) {
            console.log(err);
        }
    });
mongoose.set('debug', true);

const test = new mongoose.Schema({
    name: String,
    data: Number
});

const Test = mongoose.model('Test', test);
const testDb = new Test({
    name: 'abc',
    data: 5
});

testDb.save(err => {
    console.log(err);
});

app.use(cors());
app.use(require('morgan')('dev'));

app.get('/', (req, res) => {
    res.send('Ok!');
});

app.listen(8000, () => {
    console.log('Server started 8000');
});

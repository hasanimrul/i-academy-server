const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./Data/categories.json');
const cources = require('./Data/cources.json');

app.get('/', (req, res) => {
    res.send('Course API running');
});

app.get('/course-categories', (req, res) => {
    res.send(categories)
});

app.get('/courses', (req, res) => {
    res.send(cources)
});

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    const category_cource = cources.filter(n => n.category_id === id);
    res.send(category_cource)
}
)

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCources = cources.find(n => n._id === id);
    res.send(selectedCources);
});

app.listen(port, () => {
    console.log('Update cources server running on port', port);
});
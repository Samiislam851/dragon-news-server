const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json');
const news = require('./data/news.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Dragon is running')
});

app.get('/categories', (req, res) => {
    console.log(categories);
    res.send(categories);
})
app.get('/news', (req, res) => {
    res.send(news);
})
app.get('/news/:id', (req, res) => {
    const thisNews = news.find(n => parseInt(n._id) === parseInt(req.params.id));
    console.log(thisNews);
    res.send(thisNews);
})
app.get('/categories/:id', (req, res) => {
    if (parseInt(req.params.id) === 0) {
        res.send(news);
    }
    const category = news.filter(n => n.category_id == req.params.id)
    res.send(category);
})

app.listen(port, () => {
    console.log(`Dragon API is running on port: ${port}`);
})

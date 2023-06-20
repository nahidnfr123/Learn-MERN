// import mongoose from 'mongoose';

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
import Blog from './models/Blog';

const port = process.env.PORT || 4000;
const app = express();

// middlewares ...
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: false}));

// connect to mongodb
mongoose
    .connect('mongodb://localhost:27017/blogDB')
    .catch((err) => console.log(err));


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/create', async (req, res) => {
  // Create a new blog post object
  const article = new Blog({
    title: 'Awesome Post!',
    slug: 'awesome-post',
    published: true,
    content: 'This is the best post ever',
    tags: ['featured', 'announcement'],
  });

// Insert the article in our MongoDB database
  await article.save();
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

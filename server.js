const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const topics = require('./server/datasheets/topics.json');

app.get('/about', (req,res) => {
  res.send({})
});

app.get('/getTopics', (req,res) => {
  const topics = require('./server/datasheets/topics.json');
  if (topics) {
    res.send(topics);
  } else {
    throw new Error('could not retrieve topics');
  }
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));


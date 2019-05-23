const express = require('express');
let app = express();

app.get('/', (req, res) => {
  let date = new Date;
  setTimeout(() => {
    res.send(`Hello Kubernetes!!! It's ${date.getTime()}`)
  }, 1000);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Listening'));

const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/:startNum', (req, res) => {
  startNum = req.params.startNum;
  startNum = parseInt(startNum,10) + 10;
  res.json({"sum": startNum});
})

app.get('/:num1/:num2', (req, res) => {
  num1 = req.params.num1;
  num2 = req.params.num2;
  result = parseInt(num1,10) + parseInt(num2,10);
  res.json({"sum": result});
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
const express = require ('express')
const app = express()

const port = 3000;

app.get('/', (req, res)=> {
  res.send('<h1>Full cycle123</h1>');
})

app.listen(port, () => {
  console.log(`running at ${port}`)
})
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000
const courese = require('./Data/courseDetails.json')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/course',(req,res)=>{
  res.send(courese)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
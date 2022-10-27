const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000
const coureses = require('./Data/courseDetails.json')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/course',(req,res)=>{ 
  res.send(coureses)
})

app.get('/details/:id', (req,res)=>{
  const id = req.params.id
  const details = coureses.find(course => course.course_name == id)
  res.send(details)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
import express from 'express'

const app = express()

app.get('/api', (req, res) =>
  res.send('test'))

app.listen(3000, err => console.log('listening on 3000...'))
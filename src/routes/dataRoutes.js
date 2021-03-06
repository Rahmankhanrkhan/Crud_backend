const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const Crud = require('../models/data')

router.get('/', async (req, res) => {
  try {
    const element = await Crud.find()
    console.log('res',element)
    res.json(element)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server Error!')    
  }
})

router.post('/data', (req, res) => {
  const { title, author } = req.body
  if (!title || !author) {
    res.send('Please fill all the fields')
  }
  const data = new Crud({
    title, author
  })
  data.save()
  res.json(data)
})

router.put('/data/:id', async (req, res) => {
  const { author, title } = req.body
  const data = {}
  if (author || title) {
    for (let key in req.body) {
      data[key] = req.body[key]
    }
  }
  console.log('data', data)
  const dbData = await Crud.findOneAndUpdate(req.params.id, { $set: data }, { new: true })
  res.send(dbData)
})

router.delete('/data/:id', async (req, res) => {
  await Crud.findOneAndRemove(req.params.id);
  res.json({ msg: "Exercise deleted..." });
})

module.exports = router
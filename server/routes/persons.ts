import express from 'express'

import * as db from '../db/index.ts'

const router = express.Router()

// Get the whole list of family members
router.get('/', async (req, res) => {
  try {
    const persons = await db.getAllPersons()
    res.json({ persons })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

// TODO: add post route
// Post anew person to the persons table
// Also gets back the id of the added person, and sends this as a response to client
router.post('/', async (req, res) => {
  const person = req.body
  try {
    // TODO call function to add to database
    const result = await db.addPerson(person)
    res.status(201).json(result)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

export default router

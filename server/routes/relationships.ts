import express from 'express'

import * as db from '../db/index.ts'

const router = express.Router()

router.get('/', async (req, res) => {
  // Add params to dynamically use findRelationshipPath
  try {
    const relationship = await db.findRelationshipPath(8, 6)

    res.json(relationship)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router

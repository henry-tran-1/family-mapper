import express from 'express'

import * as db from '../db/index.ts'
import interpretRelationship from '../interpret.ts'

const router = express.Router()

router.get('/:sourceId/:targetId', async (req, res) => {
  // Add params to dynamically use findRelationshipPath
  const sourceId = Number(req.params.sourceId)
  const targetId = Number(req.params.targetId)
  try {
    // First ID is the anchor family member
    // Second ID is the target family member
    // Therefore shows the relationship of the second person to the first person
    const pathObj = await db.findRelationshipPath(sourceId, targetId)
    if (pathObj !== undefined) {
      const relationship = interpretRelationship(pathObj)
      res.json(relationship)
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router

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
    console.error(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

// Add new relationships for an added person to relationships table
// Res.body will be in RelationshipData form, need to convert into many single RelationshipEntry form
router.post('/', async (req, res) => {
  const { id, spouse, parents, children } = req.body

  // loops through spouse, and creats a bidirectional relationship between the new person and each spouse
  try {
    if (spouse !== '') {
      const spouseArr = spouse.split(',').map((str: string) => Number(str))
      for (const targetId of spouseArr) {
        await db.addRelationship({
          person_id_1: id,
          person_id_2: targetId,
          relationship_type: 'spouse',
        })
        await db.addRelationship({
          person_id_1: targetId,
          person_id_2: id,
          relationship_type: 'spouse',
        })
      }
    }

    // loops through spouse, and creats a bidirectional relationship between the new person and each parent
    if (parents !== '') {
      const parentsArr = parents.split(',').map((str: string) => Number(str))
      for (const targetId of parentsArr) {
        await db.addRelationship({
          person_id_1: id,
          person_id_2: targetId,
          relationship_type: 'child',
        })
        await db.addRelationship({
          person_id_1: targetId,
          person_id_2: id,
          relationship_type: 'parent',
        })
      }
    }

    // loops through spouse, and creats a bidirectional relationship between the new person and each child
    if (children !== '') {
      const childrenArr = children.split(',').map((str: string) => Number(str))
      for (const targetId of childrenArr) {
        await db.addRelationship({
          person_id_1: id,
          person_id_2: targetId,
          relationship_type: 'parent',
        })
        await db.addRelationship({
          person_id_1: targetId,
          person_id_2: id,
          relationship_type: 'child',
        })
      }
    }
    res.sendStatus(201)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

export default router

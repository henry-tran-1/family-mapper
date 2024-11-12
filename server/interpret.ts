import { RelationshipPath } from '../models/relationships'

export default function interpretRelationship(pathObj: RelationshipPath) {
  if (pathObj.target_person_gender === 'male') {
    console.log(pathObj.relationship_path)
    switch (pathObj.relationship_path) {
      case 'child':
        return 'father'
      case 'parent':
        return 'son'
      case 'child,child':
        return 'grandfather'
      case 'parent,parent':
        return 'grandson'
      case 'child,parent':
        return 'brother'
      case 'child,child,child':
        return 'great grandfather'
      case 'parent,parent,parent':
        return 'great grandson'
      case 'child,child,parent':
        return 'uncle'
      case 'child,parent,parent':
        return 'nephew'
      case 'child,child,parent,parent':
        return 'cousin'
    }
  } else if (pathObj.target_person_gender === 'female') {
    switch (pathObj.relationship_path) {
      case 'child':
        return 'mother'
      case 'parent':
        return 'daughter'
      case 'child,child':
        return 'grandmother'
      case 'parent,parent':
        return 'granddaughter'
      case 'child,parent':
        return 'sister'
      case 'child,child,child':
        return 'great grandmother'
      case 'parent,parent,parent':
        return 'great granddaughter'
      case 'child,child,parent':
        return 'aunt'
      case 'child,parent,parent':
        return 'niece'
      case 'child,child,parent,parent':
        return 'cousin'
    }
  }
}

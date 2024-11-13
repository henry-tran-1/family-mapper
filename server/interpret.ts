import { RelationshipPath } from '../models/relationships'

export default function interpretRelationship(pathObj: RelationshipPath) {
  if (pathObj.target_person_gender === 'male') {
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
      case 'spouse':
        return 'husband'
      case 'spouse,child':
        return 'father in law'
      case 'spouse,child, child':
        return 'grandfather in law'
      case 'spouse,child,parent':
        return 'brother in law'
      case 'parent,spouse':
        return 'son in law'
      case 'child,parent,spouse':
        return 'brother in law'
      case 'parent,parent,spouse':
        return 'grandson in law'
      default:
        return 'complicated relationship'
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
      case 'spouse':
        return 'wife'
      case 'spouse,child':
        return 'mother in law'
      case 'spouse,child,child':
        return 'grandmother in law'
      case 'spouse,child,parent':
        return 'sister in law'
      case 'parent,spouse':
        return 'daughter in law'
      case 'child,parent,spouse':
        return 'sister in law'
      case 'parent,parent,spouse':
        return 'granddaughter in law'
      default:
        return 'complicated relationship'
    }
  }
}

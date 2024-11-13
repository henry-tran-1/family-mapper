export interface Relationship {
  source_id: number
  target_id: number
  relationship_type: string
  depth: number
  relationship_path: string
}

export interface RelationshipPath {
  relationship_path: string
  depth: number
  target_person_gender: string
}

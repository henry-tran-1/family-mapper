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

export interface RelationshipData {
  spouse: string
  parents: string
  children: string
}

export interface RelationshipDataWithId extends RelationshipData {
  id: number
}

export interface RelationshipEntry {
  person_id_1: number
  person_id_2: number
  relationship_type: string
}

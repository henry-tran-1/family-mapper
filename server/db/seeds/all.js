/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('persons').del()
  await knex('relationships').del()

  await knex('persons').insert([
    {
      id: 1,
      name: 'hoa',
      gender: 'female',
      generation: 1,
      image: 'hoa_polaroid.png',
      description: 'matriach of the family',
    },
    {
      id: 2,
      name: 'luong',
      gender: 'male',
      generation: 1,
      image: 'luong_polaroid.png',
      description: 'passed away from diabetes',
    },
    {
      id: 3,
      name: 'than',
      gender: 'male',
      generation: 2,
      image: 'than_hung_polaroid.png',
      description: 'retired baker',
    },
    {
      id: 4,
      name: 'phuong',
      gender: 'female',
      generation: 2,
      image: 'phuong_polaroid.png',
      description: 'made the filled rolls',
    },
    {
      id: 5,
      name: 'kenneth',
      gender: 'male',
      generation: 3,
      image: 'kenneth_polaroid.png',
      description: "don't trust his movie suggestions",
    },
    {
      id: 6,
      name: 'henry',
      gender: 'male',
      generation: 3,
      image: 'henry_polaroid.png',
      description: 'loves a steak and cheese pie',
    },
    {
      id: 7,
      name: 'jen',
      gender: 'female',
      generation: 3,
      image: 'jen_polaroid.png',
      description: 'loves a bargin, and loves to bargain',
    },
    {
      id: 8,
      name: 'eliza',
      gender: 'female',
      generation: 4,
      image: 'eliza_polaroid.png',
      description: 'responsible child',
    },
    {
      id: 9,
      name: 'ryan',
      gender: 'male',
      generation: 4,
      image: 'ryan_polaroid.png',
      description: 'main character',
    },
    {
      id: 10,
      name: 'hugo',
      gender: 'male',
      generation: 4,
      image: 'hugo_polaroid.png',
      description: 'the naughtiest one',
    },
  ])

  await knex('relationships').insert([
    { id: 1, person_id_1: 1, person_id_2: 2, relationship_type: 'spouse' },
    { id: 2, person_id_1: 1, person_id_2: 3, relationship_type: 'parent' },
    { id: 3, person_id_1: 2, person_id_2: 1, relationship_type: 'spouse' },
    { id: 4, person_id_1: 2, person_id_2: 3, relationship_type: 'parent' },
    { id: 5, person_id_1: 3, person_id_2: 1, relationship_type: 'child' },
    { id: 6, person_id_1: 3, person_id_2: 2, relationship_type: 'child' },
    { id: 7, person_id_1: 3, person_id_2: 4, relationship_type: 'spouse' },
    { id: 8, person_id_1: 3, person_id_2: 5, relationship_type: 'parent' },
    { id: 9, person_id_1: 3, person_id_2: 6, relationship_type: 'parent' },
    { id: 10, person_id_1: 4, person_id_2: 3, relationship_type: 'spouse' },
    { id: 11, person_id_1: 4, person_id_2: 5, relationship_type: 'parent' },
    { id: 12, person_id_1: 4, person_id_2: 6, relationship_type: 'parent' },
    { id: 13, person_id_1: 5, person_id_2: 3, relationship_type: 'child' },
    { id: 14, person_id_1: 5, person_id_2: 4, relationship_type: 'child' },
    { id: 15, person_id_1: 5, person_id_2: 7, relationship_type: 'spouse' },
    { id: 16, person_id_1: 5, person_id_2: 8, relationship_type: 'parent' },
    { id: 17, person_id_1: 5, person_id_2: 9, relationship_type: 'parent' },
    { id: 18, person_id_1: 5, person_id_2: 10, relationship_type: 'parent' },
    { id: 19, person_id_1: 6, person_id_2: 3, relationship_type: 'child' },
    { id: 20, person_id_1: 6, person_id_2: 4, relationship_type: 'child' },
    { id: 21, person_id_1: 7, person_id_2: 5, relationship_type: 'spouse' },
    { id: 22, person_id_1: 7, person_id_2: 8, relationship_type: 'parent' },
    { id: 23, person_id_1: 7, person_id_2: 9, relationship_type: 'parent' },
    { id: 24, person_id_1: 7, person_id_2: 10, relationship_type: 'parent' },
    { id: 25, person_id_1: 8, person_id_2: 5, relationship_type: 'child' },
    { id: 26, person_id_1: 8, person_id_2: 7, relationship_type: 'child' },
    { id: 27, person_id_1: 9, person_id_2: 5, relationship_type: 'child' },
    { id: 28, person_id_1: 9, person_id_2: 7, relationship_type: 'child' },
    { id: 29, person_id_1: 10, person_id_2: 5, relationship_type: 'child' },
    { id: 30, person_id_1: 10, person_id_2: 7, relationship_type: 'child' },
  ])
}

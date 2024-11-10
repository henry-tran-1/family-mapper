MIGRATIONS
persons:
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('persons', (table) => {
    table.increments('id')
    table.string('name')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('persons')
}


relationships:
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('relationships', (table) => {
    table.increments('id')
    table.integer('person_id_1').references('persons.id')
    table.integer('person_id_2').references('persons.id')
    table.string('relationship_type')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('relationships')
}

SEEDS
all:
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('persons').del()
  await knex('relationships').del()

  await knex('persons').insert([
    { id: 1, name: 'mary' },
    { id: 2, name: 'john' },
    { id: 3, name: 'than' },
    { id: 4, name: 'phuong' },
    { id: 5, name: 'kenneth' },
    { id: 6, name: 'henry' },
    { id: 7, name: 'jen' },
    { id: 8, name: 'eliza' },
    { id: 9, name: 'ryan' },
    { id: 10, name: 'hugo' },
  ])
}

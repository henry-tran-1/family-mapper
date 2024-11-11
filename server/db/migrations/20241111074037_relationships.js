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

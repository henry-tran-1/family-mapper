/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('persons', (table) => {
    table.increments('id')
    table.string('name')
    table.string('gender')
    table.integer('generation')
    table.string('image')
    table.string('description')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('persons')
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("ingredients", (table) => {
    table.increments("id").primary();
    table.string("ingredient_name").unique().notNullable();
    table
      .integer("category_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("categories")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("ingredients");
}

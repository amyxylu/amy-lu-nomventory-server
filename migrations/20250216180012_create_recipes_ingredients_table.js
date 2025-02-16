/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("recipe_ingredients", (table) => {
    table.increments("id").primary();

    table
      .integer("recipe_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("recipes")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    table
      .integer("ingredient_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("ingredients")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    table.string("quantity").notNullable();

    table.timestamps(true, true);
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("recipe_ingredients");
}

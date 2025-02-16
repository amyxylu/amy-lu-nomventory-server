/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("recipes", (table) => {
    table.increments("id").primary();
    table.string("recipe_name").notNullable();
    table.text("description").notNullable();
    table.string("difficulty_level", 10).notNullable(); // Easy, Medium, Hard
    table.integer("cook_time").unsigned().notNullable(); // Minutes
    table.integer("servings").unsigned().notNullable();
    table.text("instructions").notNullable();
    table.string("image_url");

    table
      .integer("cuisine_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("cuisines")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    table.timestamps(true, true);
  });
}
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("recipes");
}

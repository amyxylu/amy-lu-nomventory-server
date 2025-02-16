/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("categories").del();
  await knex("categories").insert([
    { id: 1, category_name: "Meat & Poultry" },
    { id: 2, category_name: "Seafood" },
    { id: 3, category_name: "Dairy & Eggs" },
    { id: 4, category_name: "Legumes" },
    { id: 5, category_name: "Vegetables" },
    { id: 6, category_name: "Fruits" },
    { id: 7, category_name: "Pantry" },
    { id: 8, category_name: "Seasoning & Spices" },
    { id: 9, category_name: "Sauces & Condiments" },
    { id: 10, category_name: "Oils & Fats" },
  ]);
}

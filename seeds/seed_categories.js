/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("categories").del();
  await knex("categories").insert([
    { id: 1, category: "Meat & Poultry" },
    { id: 2, category: "Seafood" },
    { id: 3, category: "Dairy & Eggs" },
    { id: 4, category: "Legumes" },
    { id: 5, category: "Vegetables" },
    { id: 6, category: "Fruits" },
    { id: 7, category: "Pantry" },
    { id: 8, category: "Seasoning & Spices" },
    { id: 9, category: "Sauces & Condiments" },
    { id: 10, category: "Oils & Fats" },
  ]);
};

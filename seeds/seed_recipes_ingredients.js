/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("recipes_ingredients").del();
  await knex("recipes_ingredients").insert([
    // 🍝 Spaghetti Carbonara (Recipe ID: 1)
    {
      recipe_id: 1,
      ingredient_id: 1,
      quantity: 200,
      unit: "g",
      descriptor: null,
    }, // Spaghetti
    {
      recipe_id: 1,
      ingredient_id: 2,
      quantity: 2,
      unit: null,
      descriptor: "large",
    }, // Eggs
    {
      recipe_id: 1,
      ingredient_id: 3,
      quantity: 100,
      unit: "g",
      descriptor: "diced",
    }, // Pancetta
    {
      recipe_id: 1,
      ingredient_id: 4,
      quantity: 50,
      unit: "g",
      descriptor: "grated",
    }, // Pecorino Romano Cheese
    {
      recipe_id: 1,
      ingredient_id: 5,
      quantity: 1,
      unit: "tsp",
      descriptor: null,
    }, // Black Pepper
    {
      recipe_id: 1,
      ingredient_id: 6,
      quantity: 0.5,
      unit: "tsp",
      descriptor: null,
    }, // Salt

    // 🍝 Spaghetti & Meatballs (Recipe ID: 2)
    {
      recipe_id: 2,
      ingredient_id: 1,
      quantity: 250,
      unit: "g",
      descriptor: null,
    }, // Spaghetti
    {
      recipe_id: 2,
      ingredient_id: 7,
      quantity: 200,
      unit: "g",
      descriptor: "ground",
    }, // Ground Beef
    {
      recipe_id: 2,
      ingredient_id: 8,
      quantity: 0.5,
      unit: "cup",
      descriptor: null,
    }, // Bread Crumbs
    {
      recipe_id: 2,
      ingredient_id: 9,
      quantity: 50,
      unit: "g",
      descriptor: "grated",
    }, // Parmesan Cheese
    {
      recipe_id: 2,
      ingredient_id: 10,
      quantity: 2,
      unit: "cloves",
      descriptor: "minced",
    }, // Garlic
    {
      recipe_id: 2,
      ingredient_id: 11,
      quantity: 0.25,
      unit: "cup",
      descriptor: null,
    }, // Milk
    {
      recipe_id: 2,
      ingredient_id: 12,
      quantity: 2,
      unit: "tbsp",
      descriptor: "chopped",
    }, // Parsley
    {
      recipe_id: 2,
      ingredient_id: 13,
      quantity: 400,
      unit: "g",
      descriptor: null,
    }, // Canned Tomatoes
    {
      recipe_id: 2,
      ingredient_id: 14,
      quantity: 2,
      unit: "tbsp",
      descriptor: null,
    }, // Olive Oil
    {
      recipe_id: 2,
      ingredient_id: 15,
      quantity: 1,
      unit: "small",
      descriptor: "diced",
    }, // Onion
    {
      recipe_id: 2,
      ingredient_id: 6,
      quantity: 0.5,
      unit: "tsp",
      descriptor: null,
    }, // Salt
    {
      recipe_id: 2,
      ingredient_id: 5,
      quantity: 0.5,
      unit: "tsp",
      descriptor: null,
    }, // Black Pepper

    // 🍕 Margherita Pizza (Recipe ID: 3)
    {
      recipe_id: 3,
      ingredient_id: 16,
      quantity: 1,
      unit: "large",
      descriptor: null,
    }, // Pizza Dough
    {
      recipe_id: 3,
      ingredient_id: 17,
      quantity: 0.5,
      unit: "cup",
      descriptor: null,
    }, // Tomato Sauce
    {
      recipe_id: 3,
      ingredient_id: 18,
      quantity: 150,
      unit: "g",
      descriptor: "sliced",
    }, // Fresh Mozzarella
    {
      recipe_id: 3,
      ingredient_id: 19,
      quantity: 5,
      unit: "leaves",
      descriptor: null,
    }, // Basil
    {
      recipe_id: 3,
      ingredient_id: 14,
      quantity: 1,
      unit: "tbsp",
      descriptor: null,
    }, // Olive Oil
    {
      recipe_id: 3,
      ingredient_id: 6,
      quantity: 0.5,
      unit: "tsp",
      descriptor: null,
    }, // Salt

    // 🍞 Bruschetta (Recipe ID: 4)
    {
      recipe_id: 4,
      ingredient_id: 20,
      quantity: 1,
      unit: "baguette",
      descriptor: "sliced",
    }, // Baguette
    {
      recipe_id: 4,
      ingredient_id: 21,
      quantity: 2,
      unit: "large",
      descriptor: "diced",
    }, // Tomato
    {
      recipe_id: 4,
      ingredient_id: 19,
      quantity: 3,
      unit: "leaves",
      descriptor: "chopped",
    }, // Basil
    {
      recipe_id: 4,
      ingredient_id: 14,
      quantity: 2,
      unit: "tbsp",
      descriptor: null,
    }, // Olive Oil
    {
      recipe_id: 4,
      ingredient_id: 22,
      quantity: 1,
      unit: "tbsp",
      descriptor: null,
    }, // Balsamic Vinegar
    {
      recipe_id: 4,
      ingredient_id: 6,
      quantity: 0.5,
      unit: "tsp",
      descriptor: null,
    }, // Salt

    // 🍲 Lasagna (Recipe ID: 5)
    {
      recipe_id: 5,
      ingredient_id: 7,
      quantity: 200,
      unit: "g",
      descriptor: "ground",
    }, // Ground Beef
    {
      recipe_id: 5,
      ingredient_id: 23,
      quantity: 200,
      unit: "g",
      descriptor: "ground",
    }, // Ground Pork
    {
      recipe_id: 5,
      ingredient_id: 15,
      quantity: 1,
      unit: "medium",
      descriptor: "diced",
    }, // Onion
    {
      recipe_id: 5,
      ingredient_id: 10,
      quantity: 2,
      unit: "cloves",
      descriptor: "minced",
    }, // Garlic
    {
      recipe_id: 5,
      ingredient_id: 24,
      quantity: 2,
      unit: "tbsp",
      descriptor: null,
    }, // Tomato Paste
    {
      recipe_id: 5,
      ingredient_id: 13,
      quantity: 400,
      unit: "g",
      descriptor: null,
    }, // Canned Tomatoes
    {
      recipe_id: 5,
      ingredient_id: 14,
      quantity: 2,
      unit: "tbsp",
      descriptor: null,
    }, // Olive Oil
    {
      recipe_id: 5,
      ingredient_id: 12,
      quantity: 2,
      unit: "tbsp",
      descriptor: "chopped",
    }, // Parsley
    {
      recipe_id: 5,
      ingredient_id: 25,
      quantity: 250,
      unit: "g",
      descriptor: null,
    }, // Ricotta Cheese
    {
      recipe_id: 5,
      ingredient_id: 9,
      quantity: 50,
      unit: "g",
      descriptor: "grated",
    }, // Parmesan Cheese
    {
      recipe_id: 5,
      ingredient_id: 27,
      quantity: 150,
      unit: "g",
      descriptor: "shredded",
    }, // Mozzarella Cheese
    {
      recipe_id: 5,
      ingredient_id: 26,
      quantity: 8,
      unit: "sheets",
      descriptor: null,
    }, // Lasagna Sheets
    {
      recipe_id: 5,
      ingredient_id: 6,
      quantity: 0.5,
      unit: "tsp",
      descriptor: null,
    }, // Salt
    {
      recipe_id: 5,
      ingredient_id: 5,
      quantity: 0.5,
      unit: "tsp",
      descriptor: null,
    }, // Black Pepper

    // 🍲 Chicken Noodle Soup (Recipe ID: 6)
    {
      recipe_id: 6,
      ingredient_id: 28,
      quantity: 2,
      unit: null,
      descriptor: "boneless & skinless",
    }, // Chicken Breast
    {
      recipe_id: 6,
      ingredient_id: 32,
      quantity: 4,
      unit: "cups",
      descriptor: null,
    }, // Chicken Broth
    {
      recipe_id: 6,
      ingredient_id: 15,
      quantity: 1,
      unit: "medium",
      descriptor: "diced",
    }, // Onion
    {
      recipe_id: 6,
      ingredient_id: 30,
      quantity: 2,
      unit: null,
      descriptor: "diced",
    }, // Carrots
    {
      recipe_id: 6,
      ingredient_id: 31,
      quantity: 2,
      unit: "stalks",
      descriptor: "chopped",
    }, // Celery
    {
      recipe_id: 6,
      ingredient_id: 29,
      quantity: 150,
      unit: "g",
      descriptor: null,
    }, // Egg Noodles
    {
      recipe_id: 6,
      ingredient_id: 33,
      quantity: 1,
      unit: "tbsp",
      descriptor: null,
    }, // Butter
    {
      recipe_id: 6,
      ingredient_id: 34,
      quantity: 1,
      unit: "tsp",
      descriptor: "chopped",
    }, // Thyme
    {
      recipe_id: 6,
      ingredient_id: 35,
      quantity: 1,
      unit: null,
      descriptor: null,
    }, // Bay Leaf
    {
      recipe_id: 6,
      ingredient_id: 6,
      quantity: 1,
      unit: "tsp",
      descriptor: null,
    }, // Salt
    {
      recipe_id: 6,
      ingredient_id: 5,
      quantity: 0.5,
      unit: "tsp",
      descriptor: null,
    }, // Black Pepper

    // 🥗 Caesar Salad (Recipe ID: 7)
    {
      recipe_id: 7,
      ingredient_id: 36,
      quantity: 1,
      unit: "head",
      descriptor: "chopped",
    }, // Romaine Lettuce
    {
      recipe_id: 7,
      ingredient_id: 38,
      quantity: 0.25,
      unit: "cup",
      descriptor: null,
    }, // Caesar Dressing
    {
      recipe_id: 7,
      ingredient_id: 37,
      quantity: 0.5,
      unit: "cup",
      descriptor: null,
    }, // Croutons
    {
      recipe_id: 7,
      ingredient_id: 9,
      quantity: 0.25,
      unit: "cup",
      descriptor: "grated",
    }, // Parmesan Cheese
    {
      recipe_id: 7,
      ingredient_id: 39,
      quantity: 1,
      unit: "tbsp",
      descriptor: "squeezed",
    }, // Lemon Juice

    // 🍔 Cheeseburger (Recipe ID: 8)
    {
      recipe_id: 8,
      ingredient_id: 7,
      quantity: 200,
      unit: "g",
      descriptor: "ground",
    }, // Ground Beef
    {
      recipe_id: 8,
      ingredient_id: 40,
      quantity: 1,
      unit: "bun",
      descriptor: null,
    }, // Hamburger Bun
    {
      recipe_id: 8,
      ingredient_id: 41,
      quantity: 1,
      unit: "slice",
      descriptor: null,
    }, // Cheddar Cheese
    {
      recipe_id: 8,
      ingredient_id: 42,
      quantity: 1,
      unit: "leaf",
      descriptor: null,
    }, // Lettuce
    {
      recipe_id: 8,
      ingredient_id: 21,
      quantity: 2,
      unit: "slices",
      descriptor: null,
    }, // Tomato
    {
      recipe_id: 8,
      ingredient_id: 43,
      quantity: 3,
      unit: "slices",
      descriptor: null,
    }, // Pickles
    {
      recipe_id: 8,
      ingredient_id: 44,
      quantity: 1,
      unit: "tbsp",
      descriptor: null,
    }, // Ketchup
    {
      recipe_id: 8,
      ingredient_id: 45,
      quantity: 1,
      unit: "tsp",
      descriptor: null,
    }, // Mustard
    {
      recipe_id: 8,
      ingredient_id: 46,
      quantity: 1,
      unit: "tbsp",
      descriptor: null,
    }, // Mayonnaise
    {
      recipe_id: 8,
      ingredient_id: 6,
      quantity: 0.5,
      unit: "tsp",
      descriptor: null,
    }, // Salt
    {
      recipe_id: 8,
      ingredient_id: 5,
      quantity: 0.25,
      unit: "tsp",
      descriptor: null,
    }, // Black Pepper

    // 🥑 Avocado Toast (Recipe ID: 9)
    {
      recipe_id: 9,
      ingredient_id: 47,
      quantity: 2,
      unit: "slices",
      descriptor: null,
    }, // Bread
    {
      recipe_id: 9,
      ingredient_id: 48,
      quantity: 1,
      unit: null,
      descriptor: "mashed",
    }, // Avocado
    {
      recipe_id: 9,
      ingredient_id: 39,
      quantity: 1,
      unit: "tbsp",
      descriptor: "squeezed",
    }, // Lemon Juice
    {
      recipe_id: 9,
      ingredient_id: 6,
      quantity: 0.25,
      unit: "tsp",
      descriptor: null,
    }, // Salt
    {
      recipe_id: 9,
      ingredient_id: 5,
      quantity: 0.25,
      unit: "tsp",
      descriptor: null,
    }, // Black Pepper
    {
      recipe_id: 9,
      ingredient_id: 49,
      quantity: 3,
      unit: null,
      descriptor: "halved (optional)",
    }, // Cherry Tomatoes

    // 🦞 Lobster Bisque (Recipe ID: 10)
    {
      recipe_id: 10,
      ingredient_id: 50,
      quantity: 1,
      unit: "whole",
      descriptor: "cooked & chopped",
    }, // Lobster
    {
      recipe_id: 10,
      ingredient_id: 32,
      quantity: 3,
      unit: "cups",
      descriptor: null,
    }, // Chicken Broth
    {
      recipe_id: 10,
      ingredient_id: 51,
      quantity: 0.5,
      unit: "cup",
      descriptor: null,
    }, // Heavy Cream
    {
      recipe_id: 10,
      ingredient_id: 52,
      quantity: 0.25,
      unit: "cup",
      descriptor: null,
    }, // White Wine
    {
      recipe_id: 10,
      ingredient_id: 15,
      quantity: 1,
      unit: "small",
      descriptor: "diced",
    }, // Onion
    {
      recipe_id: 10,
      ingredient_id: 10,
      quantity: 2,
      unit: "cloves",
      descriptor: "minced",
    }, // Garlic
    {
      recipe_id: 10,
      ingredient_id: 53,
      quantity: 0.5,
      unit: "tsp",
      descriptor: null,
    }, // Paprika
    {
      recipe_id: 10,
      ingredient_id: 6,
      quantity: 0.5,
      unit: "tsp",
      descriptor: null,
    }, // Salt
    {
      recipe_id: 10,
      ingredient_id: 5,
      quantity: 0.25,
      unit: "tsp",
      descriptor: null,
    }, // Black Pepper
    {
      recipe_id: 10,
      ingredient_id: 33,
      quantity: 2,
      unit: "tbsp",
      descriptor: null,
    }, // Butter

    // 🌮 Fish Tacos (Recipe ID: 11)
    {
      recipe_id: 11,
      ingredient_id: 54,
      quantity: 200,
      unit: "g",
      descriptor: "fillet",
    }, // White Fish
    {
      recipe_id: 11,
      ingredient_id: 6,
      quantity: 0.5,
      unit: "tsp",
      descriptor: null,
    }, // Salt
    {
      recipe_id: 11,
      ingredient_id: 5,
      quantity: 0.25,
      unit: "tsp",
      descriptor: null,
    }, // Black Pepper
    {
      recipe_id: 11,
      ingredient_id: 59,
      quantity: 0.5,
      unit: "tsp",
      descriptor: null,
    }, // Chili Powder
    {
      recipe_id: 11,
      ingredient_id: 58,
      quantity: 0.5,
      unit: "tsp",
      descriptor: null,
    }, // Cumin
    {
      recipe_id: 11,
      ingredient_id: 55,
      quantity: 4,
      unit: "small",
      descriptor: null,
    }, // Corn Tortilla
    {
      recipe_id: 11,
      ingredient_id: 56,
      quantity: 1,
      unit: "cup",
      descriptor: "shredded",
    }, // Cabbage
    {
      recipe_id: 11,
      ingredient_id: 57,
      quantity: 2,
      unit: "tbsp",
      descriptor: "chopped",
    }, // Cilantro
    {
      recipe_id: 11,
      ingredient_id: 61,
      quantity: 1,
      unit: null,
      descriptor: "sliced",
    }, // Lime
    {
      recipe_id: 11,
      ingredient_id: 60,
      quantity: 2,
      unit: "tbsp",
      descriptor: null,
    }, // Sour Cream

    // 🥑 Guacamole (Recipe ID: 12)
    {
      recipe_id: 12,
      ingredient_id: 48,
      quantity: 2,
      unit: null,
      descriptor: "mashed",
    }, // Avocado
    {
      recipe_id: 12,
      ingredient_id: 21,
      quantity: 1,
      unit: null,
      descriptor: "diced",
    }, // Tomato
    {
      recipe_id: 12,
      ingredient_id: 10,
      quantity: 1,
      unit: "clove",
      descriptor: "minced",
    }, // Garlic
    {
      recipe_id: 12,
      ingredient_id: 6,
      quantity: 0.5,
      unit: "tsp",
      descriptor: null,
    }, // Salt
    {
      recipe_id: 12,
      ingredient_id: 5,
      quantity: 0.25,
      unit: "tsp",
      descriptor: null,
    }, // Black Pepper
    {
      recipe_id: 12,
      ingredient_id: 57,
      quantity: 2,
      unit: "tbsp",
      descriptor: "chopped",
    }, // Cilantro
    {
      recipe_id: 12,
      ingredient_id: 61,
      quantity: 1,
      unit: "tbsp",
      descriptor: "squeezed",
    }, // Lime Juice

    // 🍤 Ceviche (Recipe ID: 13)
    {
      recipe_id: 13,
      ingredient_id: 54,
      quantity: 200,
      unit: "g",
      descriptor: "diced",
    }, // White Fish
    {
      recipe_id: 13,
      ingredient_id: 61,
      quantity: 0.5,
      unit: "cup",
      descriptor: "freshly squeezed",
    }, // Lime Juice
    {
      recipe_id: 13,
      ingredient_id: 57,
      quantity: 2,
      unit: "tbsp",
      descriptor: "chopped",
    }, // Cilantro
    {
      recipe_id: 13,
      ingredient_id: 21,
      quantity: 1,
      unit: null,
      descriptor: "diced",
    }, // Tomato
    {
      recipe_id: 13,
      ingredient_id: 10,
      quantity: 1,
      unit: "clove",
      descriptor: "minced",
    }, // Garlic
    {
      recipe_id: 13,
      ingredient_id: 6,
      quantity: 0.5,
      unit: "tsp",
      descriptor: null,
    }, // Salt
    {
      recipe_id: 13,
      ingredient_id: 5,
      quantity: 0.25,
      unit: "tsp",
      descriptor: null,
    }, // Black Pepper
    {
      recipe_id: 13,
      ingredient_id: 56,
      quantity: 0.5,
      unit: "cup",
      descriptor: "shredded (optional)",
    }, // Cabbage

    // 🌮 Tacos al Pastor (Recipe ID: 14)
    {
      recipe_id: 14,
      ingredient_id: 62,
      quantity: 300,
      unit: "g",
      descriptor: "sliced",
    }, // Pork Loin
    {
      recipe_id: 14,
      ingredient_id: 64,
      quantity: 2,
      unit: "tbsp",
      descriptor: null,
    }, // Achiote Paste
    {
      recipe_id: 14,
      ingredient_id: 65,
      quantity: 0.25,
      unit: "cup",
      descriptor: null,
    }, // Orange Juice
    {
      recipe_id: 14,
      ingredient_id: 66,
      quantity: 1,
      unit: "tbsp",
      descriptor: null,
    }, // White Vinegar
    {
      recipe_id: 14,
      ingredient_id: 57,
      quantity: 2,
      unit: "tbsp",
      descriptor: "chopped",
    }, // Cilantro
    {
      recipe_id: 14,
      ingredient_id: 55,
      quantity: 4,
      unit: "small",
      descriptor: null,
    }, // Corn Tortilla
    {
      recipe_id: 14,
      ingredient_id: 63,
      quantity: 0.5,
      unit: "cup",
      descriptor: "diced",
    }, // Pineapple
    {
      recipe_id: 14,
      ingredient_id: 15,
      quantity: 1,
      unit: "small",
      descriptor: "chopped",
    }, // Onion
    {
      recipe_id: 14,
      ingredient_id: 6,
      quantity: 0.5,
      unit: "tsp",
      descriptor: null,
    }, // Salt
    {
      recipe_id: 14,
      ingredient_id: 5,
      quantity: 0.25,
      unit: "tsp",
      descriptor: null,
    }, // Black Pepper
    {
      recipe_id: 14,
      ingredient_id: 59,
      quantity: 0.5,
      unit: "tsp",
      descriptor: null,
    }, // Chili Powder
    {
      recipe_id: 14,
      ingredient_id: 58,
      quantity: 0.5,
      unit: "tsp",
      descriptor: null,
    }, // Cumin
    {
      recipe_id: 14,
      ingredient_id: 67,
      quantity: 0.5,
      unit: "tsp",
      descriptor: null,
    }, // Oregano

    // 🌯 Chicken Enchiladas (Recipe ID: 15)
    {
      recipe_id: 15,
      ingredient_id: 28,
      quantity: 2,
      unit: null,
      descriptor: "shredded",
    }, // Chicken Breast
    {
      recipe_id: 15,
      ingredient_id: 55,
      quantity: 4,
      unit: "small",
      descriptor: null,
    }, // Corn Tortilla
    {
      recipe_id: 15,
      ingredient_id: 68,
      quantity: 0.5,
      unit: "cup",
      descriptor: null,
    }, // Enchilada Sauce
    {
      recipe_id: 15,
      ingredient_id: 9,
      quantity: 0.25,
      unit: "cup",
      descriptor: "grated",
    }, // Parmesan Cheese
    {
      recipe_id: 15,
      ingredient_id: 27,
      quantity: 0.5,
      unit: "cup",
      descriptor: "shredded",
    }, // Mozzarella Cheese
    {
      recipe_id: 15,
      ingredient_id: 12,
      quantity: 2,
      unit: "tbsp",
      descriptor: "chopped",
    }, // Parsley
    {
      recipe_id: 15,
      ingredient_id: 60,
      quantity: 2,
      unit: "tbsp",
      descriptor: null,
    }, // Sour Cream
    {
      recipe_id: 15,
      ingredient_id: 6,
      quantity: 0.5,
      unit: "tsp",
      descriptor: null,
    }, // Salt
    {
      recipe_id: 15,
      ingredient_id: 5,
      quantity: 0.25,
      unit: "tsp",
      descriptor: null,
    }, // Black Pepper

    // 🍚 Fried Rice (Recipe ID: 16)
    {
      recipe_id: 16,
      ingredient_id: 69,
      quantity: 2,
      unit: "cups",
      descriptor: "cooked (day-old)",
    }, // Rice
    {
      recipe_id: 16,
      ingredient_id: 2,
      quantity: 2,
      unit: null,
      descriptor: "beaten",
    }, // Eggs
    {
      recipe_id: 16,
      ingredient_id: 15,
      quantity: 1,
      unit: "small",
      descriptor: "diced",
    }, // Onion
    {
      recipe_id: 16,
      ingredient_id: 72,
      quantity: 0.5,
      unit: "cup",
      descriptor: null,
    }, // Peas
    {
      recipe_id: 16,
      ingredient_id: 14,
      quantity: 1,
      unit: "tbsp",
      descriptor: null,
    }, // Olive Oil
    {
      recipe_id: 16,
      ingredient_id: 70,
      quantity: 2,
      unit: "tbsp",
      descriptor: null,
    }, // Soy Sauce
    {
      recipe_id: 16,
      ingredient_id: 74,
      quantity: 1,
      unit: "tsp",
      descriptor: null,
    }, // Sesame Oil
    {
      recipe_id: 16,
      ingredient_id: 6,
      quantity: 0.5,
      unit: "tsp",
      descriptor: null,
    }, // Salt
    {
      recipe_id: 16,
      ingredient_id: 5,
      quantity: 0.25,
      unit: "tsp",
      descriptor: null,
    }, // Black Pepper
    {
      recipe_id: 16,
      ingredient_id: 71,
      quantity: 1,
      unit: "tbsp",
      descriptor: "chopped",
    }, // Green Onion

    // 🌶️ Mapo Tofu (Recipe ID: 17)
    {
      recipe_id: 17,
      ingredient_id: 90,
      quantity: 1,
      unit: "block",
      descriptor: "diced",
    }, // Tofu
    {
      recipe_id: 17,
      ingredient_id: 23,
      quantity: 150,
      unit: "g",
      descriptor: "ground",
    }, // Ground Pork
    {
      recipe_id: 17,
      ingredient_id: 15,
      quantity: 1,
      unit: "small",
      descriptor: "diced",
    }, // Onion
    {
      recipe_id: 17,
      ingredient_id: 10,
      quantity: 2,
      unit: "cloves",
      descriptor: "minced",
    }, // Garlic
    {
      recipe_id: 17,
      ingredient_id: 79,
      quantity: 1,
      unit: "tbsp",
      descriptor: null,
    }, // Chili Bean Paste
    {
      recipe_id: 17,
      ingredient_id: 80,
      quantity: 1,
      unit: "tsp",
      descriptor: "ground",
    }, // Sichuan Peppercorn
    {
      recipe_id: 17,
      ingredient_id: 70,
      quantity: 1,
      unit: "tbsp",
      descriptor: null,
    }, // Soy Sauce
    {
      recipe_id: 17,
      ingredient_id: 81,
      quantity: 1,
      unit: "tbsp",
      descriptor: null,
    }, // Chili Oil
    {
      recipe_id: 17,
      ingredient_id: 89,
      quantity: 1,
      unit: "tsp",
      descriptor: "dissolved in water",
    }, // Cornstarch
    {
      recipe_id: 17,
      ingredient_id: 71,
      quantity: 1,
      unit: "tbsp",
      descriptor: "chopped",
    }, // Green Onion

    // 🍲 Hong Kong Borscht Soup (Recipe ID: 18)
    {
      recipe_id: 18,
      ingredient_id: 75,
      quantity: 200,
      unit: "g",
      descriptor: "beef brisket, cubed",
    }, // Beef Brisket
    {
      recipe_id: 18,
      ingredient_id: 15,
      quantity: 1,
      unit: "medium",
      descriptor: "diced",
    }, // Onion
    {
      recipe_id: 18,
      ingredient_id: 30,
      quantity: 1,
      unit: null,
      descriptor: "diced",
    }, // Carrot
    {
      recipe_id: 18,
      ingredient_id: 76,
      quantity: 1,
      unit: null,
      descriptor: "diced",
    }, // Potato
    {
      recipe_id: 18,
      ingredient_id: 13,
      quantity: 400,
      unit: "g",
      descriptor: null,
    }, // Canned Tomatoes
    {
      recipe_id: 18,
      ingredient_id: 24,
      quantity: 2,
      unit: "tbsp",
      descriptor: null,
    }, // Tomato Paste
    {
      recipe_id: 18,
      ingredient_id: 77,
      quantity: 3,
      unit: "cups",
      descriptor: null,
    }, // Beef Broth
    {
      recipe_id: 18,
      ingredient_id: 6,
      quantity: 0.5,
      unit: "tsp",
      descriptor: null,
    }, // Salt
    {
      recipe_id: 18,
      ingredient_id: 5,
      quantity: 0.25,
      unit: "tsp",
      descriptor: null,
    }, // Black Pepper
    {
      recipe_id: 18,
      ingredient_id: 35,
      quantity: 1,
      unit: null,
      descriptor: null,
    }, // Bay Leaf

    // 🌶️ Kung Pao Chicken (Recipe ID: 19)
    {
      recipe_id: 19,
      ingredient_id: 28,
      quantity: 200,
      unit: "g",
      descriptor: "diced",
    }, // Chicken Breast
    {
      recipe_id: 19,
      ingredient_id: 71,
      quantity: 1,
      unit: "tbsp",
      descriptor: "chopped",
    }, // Green Onion
    {
      recipe_id: 19,
      ingredient_id: 10,
      quantity: 2,
      unit: "cloves",
      descriptor: "minced",
    }, // Garlic
    {
      recipe_id: 19,
      ingredient_id: 86,
      quantity: 5,
      unit: null,
      descriptor: "whole",
    }, // Dried Red Chilies
    {
      recipe_id: 19,
      ingredient_id: 85,
      quantity: 0.25,
      unit: "cup",
      descriptor: "roasted",
    }, // Peanuts
    {
      recipe_id: 19,
      ingredient_id: 70,
      quantity: 2,
      unit: "tbsp",
      descriptor: null,
    }, // Soy Sauce
    {
      recipe_id: 19,
      ingredient_id: 87,
      quantity: 1,
      unit: "tbsp",
      descriptor: null,
    }, // Oyster Sauce
    {
      recipe_id: 19,
      ingredient_id: 74,
      quantity: 1,
      unit: "tsp",
      descriptor: null,
    }, // Sesame Oil
    {
      recipe_id: 19,
      ingredient_id: 89,
      quantity: 1,
      unit: "tsp",
      descriptor: "dissolved in water",
    }, // Cornstarch
    {
      recipe_id: 19,
      ingredient_id: 6,
      quantity: 0.5,
      unit: "tsp",
      descriptor: null,
    }, // Salt
    {
      recipe_id: 19,
      ingredient_id: 5,
      quantity: 0.25,
      unit: "tsp",
      descriptor: null,
    }, // Black Pepper

    // 🍜 Dan Dan Noodles (Recipe ID: 20)
    {
      recipe_id: 20,
      ingredient_id: 78,
      quantity: 200,
      unit: "g",
      descriptor: null,
    }, // Noodles
    {
      recipe_id: 20,
      ingredient_id: 23,
      quantity: 150,
      unit: "g",
      descriptor: "ground",
    }, // Ground Pork
    {
      recipe_id: 20,
      ingredient_id: 15,
      quantity: 1,
      unit: "small",
      descriptor: "diced",
    }, // Onion
    {
      recipe_id: 20,
      ingredient_id: 10,
      quantity: 2,
      unit: "cloves",
      descriptor: "minced",
    }, // Garlic
    {
      recipe_id: 20,
      ingredient_id: 79,
      quantity: 1,
      unit: "tbsp",
      descriptor: null,
    }, // Chili Bean Paste
    {
      recipe_id: 20,
      ingredient_id: 80,
      quantity: 1,
      unit: "tsp",
      descriptor: "ground",
    }, // Sichuan Peppercorn
    {
      recipe_id: 20,
      ingredient_id: 81,
      quantity: 1,
      unit: "tbsp",
      descriptor: null,
    }, // Chili Oil
    {
      recipe_id: 20,
      ingredient_id: 82,
      quantity: 1,
      unit: "tbsp",
      descriptor: null,
    }, // Vinegar
    {
      recipe_id: 20,
      ingredient_id: 83,
      quantity: 1,
      unit: "tbsp",
      descriptor: null,
    }, // Sesame Paste
    {
      recipe_id: 20,
      ingredient_id: 85,
      quantity: 2,
      unit: "tbsp",
      descriptor: "chopped",
    }, // Peanuts
    {
      recipe_id: 20,
      ingredient_id: 70,
      quantity: 2,
      unit: "tbsp",
      descriptor: null,
    }, // Soy Sauce
    {
      recipe_id: 20,
      ingredient_id: 89,
      quantity: 1,
      unit: "tsp",
      descriptor: "dissolved in water",
    }, // Cornstarch
    {
      recipe_id: 20,
      ingredient_id: 6,
      quantity: 0.5,
      unit: "tsp",
      descriptor: null,
    }, // Salt
    {
      recipe_id: 20,
      ingredient_id: 5,
      quantity: 0.25,
      unit: "tsp",
      descriptor: null,
    }, // Black Pepper

    // 🍲 Soft Tofu Stew with Seafood (Sundubu Jjigae) (Recipe ID: 21)
    {
      recipe_id: 21,
      ingredient_id: 91,
      quantity: 1,
      unit: "package",
      descriptor: null,
    }, // Soft Tofu
    {
      recipe_id: 21,
      ingredient_id: 92,
      quantity: 6,
      unit: null,
      descriptor: "cleaned",
    }, // Mussels
    {
      recipe_id: 21,
      ingredient_id: 93,
      quantity: 6,
      unit: null,
      descriptor: "peeled",
    }, // Shrimp
    {
      recipe_id: 21,
      ingredient_id: 94,
      quantity: 0.25,
      unit: "cup",
      descriptor: null,
    }, // Dried Anchovies
    {
      recipe_id: 21,
      ingredient_id: 95,
      quantity: 1,
      unit: "small piece",
      descriptor: null,
    }, // Kelp
    {
      recipe_id: 21,
      ingredient_id: 99,
      quantity: 1,
      unit: "tbsp",
      descriptor: null,
    }, // Gochugaru (Korean Red Pepper Flakes)
    {
      recipe_id: 21,
      ingredient_id: 100,
      quantity: 1,
      unit: "tbsp",
      descriptor: null,
    }, // Gochujang (Korean Chili Paste)
    {
      recipe_id: 21,
      ingredient_id: 6,
      quantity: 0.5,
      unit: "tsp",
      descriptor: null,
    }, // Salt
    {
      recipe_id: 21,
      ingredient_id: 5,
      quantity: 0.25,
      unit: "tsp",
      descriptor: null,
    }, // Black Pepper
    {
      recipe_id: 21,
      ingredient_id: 71,
      quantity: 1,
      unit: "tbsp",
      descriptor: "chopped",
    }, // Green Onion

    // 🍲 Kimchi Stew (Kimchi Jjigae) (Recipe ID: 22)
    {
      recipe_id: 22,
      ingredient_id: 97,
      quantity: 1,
      unit: "cup",
      descriptor: "chopped",
    }, // Aged Kimchi
    {
      recipe_id: 22,
      ingredient_id: 98,
      quantity: 150,
      unit: "g",
      descriptor: "sliced",
    }, // Pork Belly
    {
      recipe_id: 22,
      ingredient_id: 6,
      quantity: 0.5,
      unit: "tsp",
      descriptor: null,
    }, // Salt
    {
      recipe_id: 22,
      ingredient_id: 5,
      quantity: 0.25,
      unit: "tsp",
      descriptor: null,
    }, // Black Pepper
    {
      recipe_id: 22,
      ingredient_id: 99,
      quantity: 1,
      unit: "tbsp",
      descriptor: null,
    }, // Gochugaru (Korean Red Pepper Flakes)
    {
      recipe_id: 22,
      ingredient_id: 100,
      quantity: 1,
      unit: "tbsp",
      descriptor: null,
    }, // Gochujang (Korean Chili Paste)
    {
      recipe_id: 22,
      ingredient_id: 71,
      quantity: 1,
      unit: "tbsp",
      descriptor: "chopped",
    }, // Green Onion

    // 🍜 Jjajangmyeon (Recipe ID: 23)
    {
      recipe_id: 23,
      ingredient_id: 78,
      quantity: 200,
      unit: "g",
      descriptor: null,
    }, // Noodles
    {
      recipe_id: 23,
      ingredient_id: 23,
      quantity: 150,
      unit: "g",
      descriptor: "ground",
    }, // Ground Pork
    {
      recipe_id: 23,
      ingredient_id: 101,
      quantity: 2,
      unit: "tbsp",
      descriptor: null,
    }, // Black Bean Paste
    {
      recipe_id: 23,
      ingredient_id: 15,
      quantity: 1,
      unit: "small",
      descriptor: "diced",
    }, // Onion
    {
      recipe_id: 23,
      ingredient_id: 102,
      quantity: 0.5,
      unit: "cup",
      descriptor: "diced",
    }, // Zucchini
    {
      recipe_id: 23,
      ingredient_id: 6,
      quantity: 0.5,
      unit: "tsp",
      descriptor: null,
    }, // Salt
    {
      recipe_id: 23,
      ingredient_id: 5,
      quantity: 0.25,
      unit: "tsp",
      descriptor: null,
    }, // Black Pepper
    {
      recipe_id: 23,
      ingredient_id: 89,
      quantity: 1,
      unit: "tsp",
      descriptor: "dissolved in water",
    }, // Cornstarch

    // 🍚 Bibimbap (Recipe ID: 24)
    {
      recipe_id: 24,
      ingredient_id: 69,
      quantity: 2,
      unit: "cups",
      descriptor: "cooked",
    }, // Rice
    {
      recipe_id: 24,
      ingredient_id: 28,
      quantity: 150,
      unit: "g",
      descriptor: "sliced",
    }, // Chicken Breast
    {
      recipe_id: 24,
      ingredient_id: 104,
      quantity: 0.5,
      unit: "cup",
      descriptor: "blanched",
    }, // Bean Sprouts
    {
      recipe_id: 24,
      ingredient_id: 108,
      quantity: 0.5,
      unit: "cup",
      descriptor: "blanched",
    }, // Spinach
    {
      recipe_id: 24,
      ingredient_id: 10,
      quantity: 1,
      unit: "clove",
      descriptor: "minced",
    }, // Garlic
    {
      recipe_id: 24,
      ingredient_id: 73,
      quantity: 1,
      unit: "tsp",
      descriptor: "grated",
    }, // Ginger
    {
      recipe_id: 24,
      ingredient_id: 99,
      quantity: 1,
      unit: "tbsp",
      descriptor: null,
    }, // Gochugaru (Korean Red Pepper Flakes)
    {
      recipe_id: 24,
      ingredient_id: 100,
      quantity: 1,
      unit: "tbsp",
      descriptor: null,
    }, // Gochujang (Korean Chili Paste)
    {
      recipe_id: 24,
      ingredient_id: 2,
      quantity: 1,
      unit: null,
      descriptor: "fried",
    }, // Egg
    {
      recipe_id: 24,
      ingredient_id: 6,
      quantity: 0.5,
      unit: "tsp",
      descriptor: null,
    }, // Salt
    {
      recipe_id: 24,
      ingredient_id: 5,
      quantity: 0.25,
      unit: "tsp",
      descriptor: null,
    }, // Black Pepper

    // 🍜 Japchae (Recipe ID: 25)
    {
      recipe_id: 25,
      ingredient_id: 106,
      quantity: 200,
      unit: "g",
      descriptor: null,
    }, // Sweet Potato Starch Noodles
    {
      recipe_id: 25,
      ingredient_id: 107,
      quantity: 150,
      unit: "g",
      descriptor: "sliced",
    }, // Beef
    {
      recipe_id: 25,
      ingredient_id: 102,
      quantity: 0.5,
      unit: "cup",
      descriptor: "julienned",
    }, // Zucchini
    {
      recipe_id: 25,
      ingredient_id: 15,
      quantity: 1,
      unit: "small",
      descriptor: "sliced",
    }, // Onion
    {
      recipe_id: 25,
      ingredient_id: 109,
      quantity: 4,
      unit: null,
      descriptor: "sliced",
    }, // Shiitake Mushroom
    {
      recipe_id: 25,
      ingredient_id: 74,
      quantity: 1,
      unit: "tbsp",
      descriptor: null,
    }, // Sesame Oil
    {
      recipe_id: 25,
      ingredient_id: 87,
      quantity: 1,
      unit: "tbsp",
      descriptor: null,
    }, // Oyster Sauce
    {
      recipe_id: 25,
      ingredient_id: 6,
      quantity: 0.5,
      unit: "tsp",
      descriptor: null,
    }, // Salt
    {
      recipe_id: 25,
      ingredient_id: 5,
      quantity: 0.25,
      unit: "tsp",
      descriptor: null,
    }, // Black Pepper
    {
      recipe_id: 25,
      ingredient_id: 105,
      quantity: 1,
      unit: "tbsp",
      descriptor: "toasted",
    }, // Sesame Seeds

    // 🍛 Katsu Curry (Recipe ID: 26)
    {
      recipe_id: 26,
      ingredient_id: 110,
      quantity: 1,
      unit: null,
      descriptor: "breaded and fried",
    }, // Pork Cutlet
    {
      recipe_id: 26,
      ingredient_id: 69,
      quantity: 2,
      unit: "cups",
      descriptor: "cooked",
    }, // Rice
    {
      recipe_id: 26,
      ingredient_id: 112,
      quantity: 1,
      unit: "block",
      descriptor: null,
    }, // Japanese Curry Roux
    {
      recipe_id: 26,
      ingredient_id: 15,
      quantity: 1,
      unit: "small",
      descriptor: "diced",
    }, // Onion
    {
      recipe_id: 26,
      ingredient_id: 30,
      quantity: 1,
      unit: null,
      descriptor: "diced",
    }, // Carrot
    {
      recipe_id: 26,
      ingredient_id: 76,
      quantity: 1,
      unit: null,
      descriptor: "diced",
    }, // Potato
    {
      recipe_id: 26,
      ingredient_id: 14,
      quantity: 1,
      unit: "tbsp",
      descriptor: null,
    }, // Olive Oil
    {
      recipe_id: 26,
      ingredient_id: 6,
      quantity: 0.5,
      unit: "tsp",
      descriptor: null,
    }, // Salt
    {
      recipe_id: 26,
      ingredient_id: 5,
      quantity: 0.25,
      unit: "tsp",
      descriptor: null,
    }, // Black Pepper

    // 🍜 Miso Ramen (Recipe ID: 27)
    {
      recipe_id: 27,
      ingredient_id: 115,
      quantity: 200,
      unit: "g",
      descriptor: null,
    }, // Ramen Noodles
    {
      recipe_id: 27,
      ingredient_id: 113,
      quantity: 2,
      unit: "tbsp",
      descriptor: null,
    }, // Miso Paste
    {
      recipe_id: 27,
      ingredient_id: 114,
      quantity: 3,
      unit: "cups",
      descriptor: null,
    }, // Dashi Stock
    {
      recipe_id: 27,
      ingredient_id: 116,
      quantity: 100,
      unit: "g",
      descriptor: "sliced",
    }, // Chashu Pork
    {
      recipe_id: 27,
      ingredient_id: 2,
      quantity: 1,
      unit: null,
      descriptor: "soft-boiled",
    }, // Egg
    {
      recipe_id: 27,
      ingredient_id: 71,
      quantity: 1,
      unit: "tbsp",
      descriptor: "chopped",
    }, // Green Onion
    {
      recipe_id: 27,
      ingredient_id: 117,
      quantity: 0.25,
      unit: "cup",
      descriptor: null,
    }, // Corn
    {
      recipe_id: 27,
      ingredient_id: 118,
      quantity: 1,
      unit: "sheet",
      descriptor: "sliced",
    }, // Nori
    {
      recipe_id: 27,
      ingredient_id: 74,
      quantity: 1,
      unit: "tsp",
      descriptor: null,
    }, // Sesame Oil
    {
      recipe_id: 27,
      ingredient_id: 6,
      quantity: 0.5,
      unit: "tsp",
      descriptor: null,
    }, // Salt

    // 🍣 Salmon Avocado Roll (Recipe ID: 28)
    {
      recipe_id: 28,
      ingredient_id: 119,
      quantity: 2,
      unit: "cups",
      descriptor: "cooked & seasoned",
    }, // Sushi Rice
    {
      recipe_id: 28,
      ingredient_id: 120,
      quantity: 100,
      unit: "g",
      descriptor: "sliced",
    }, // Salmon Sashimi
    {
      recipe_id: 28,
      ingredient_id: 48,
      quantity: 1,
      unit: null,
      descriptor: "sliced",
    }, // Avocado
    {
      recipe_id: 28,
      ingredient_id: 118,
      quantity: 1,
      unit: "sheet",
      descriptor: null,
    }, // Nori
    {
      recipe_id: 28,
      ingredient_id: 122,
      quantity: 0.5,
      unit: "tsp",
      descriptor: null,
    }, // Wasabi
    {
      recipe_id: 28,
      ingredient_id: 123,
      quantity: 1,
      unit: "tbsp",
      descriptor: "sliced",
    }, // Pickled Ginger
    {
      recipe_id: 28,
      ingredient_id: 88,
      quantity: 1,
      unit: "tbsp",
      descriptor: null,
    }, // Rice Vinegar

    // 🥞 Okonomiyaki (Recipe ID: 29)
    {
      recipe_id: 29,
      ingredient_id: 111,
      quantity: 0.5,
      unit: "cup",
      descriptor: null,
    }, // Flour
    {
      recipe_id: 29,
      ingredient_id: 114,
      quantity: 0.5,
      unit: "cup",
      descriptor: null,
    }, // Dashi Stock
    {
      recipe_id: 29,
      ingredient_id: 2,
      quantity: 1,
      unit: null,
      descriptor: "beaten",
    }, // Egg
    {
      recipe_id: 29,
      ingredient_id: 56,
      quantity: 1,
      unit: "cup",
      descriptor: "shredded",
    }, // Cabbage
    {
      recipe_id: 29,
      ingredient_id: 110,
      quantity: 100,
      unit: "g",
      descriptor: "chopped",
    }, // Pork Cutlet
    {
      recipe_id: 29,
      ingredient_id: 124,
      quantity: 2,
      unit: "tbsp",
      descriptor: null,
    }, // Okonomiyaki Sauce
    {
      recipe_id: 29,
      ingredient_id: 125,
      quantity: 1,
      unit: "tbsp",
      descriptor: null,
    }, // Kewpie Mayonnaise
    {
      recipe_id: 29,
      ingredient_id: 126,
      quantity: 1,
      unit: "tbsp",
      descriptor: null,
    }, // Bonito Flakes
    {
      recipe_id: 29,
      ingredient_id: 6,
      quantity: 0.5,
      unit: "tsp",
      descriptor: null,
    }, // Salt

    // 🐔 Oyakodon (Recipe ID: 30)
    {
      recipe_id: 30,
      ingredient_id: 69,
      quantity: 2,
      unit: "cups",
      descriptor: "cooked",
    }, // Rice
    {
      recipe_id: 30,
      ingredient_id: 127,
      quantity: 150,
      unit: "g",
      descriptor: "sliced",
    }, // Chicken Thigh
    {
      recipe_id: 30,
      ingredient_id: 113,
      quantity: 0.5,
      unit: "tbsp",
      descriptor: null,
    }, // Miso Paste
    {
      recipe_id: 30,
      ingredient_id: 128,
      quantity: 1,
      unit: "tbsp",
      descriptor: null,
    }, // Mirin
    {
      recipe_id: 30,
      ingredient_id: 2,
      quantity: 2,
      unit: null,
      descriptor: "lightly beaten",
    }, // Eggs
    {
      recipe_id: 30,
      ingredient_id: 71,
      quantity: 1,
      unit: "tbsp",
      descriptor: "chopped",
    }, // Green Onion
    {
      recipe_id: 30,
      ingredient_id: 6,
      quantity: 0.5,
      unit: "tsp",
      descriptor: null,
    }, // Salt
  ]);
}

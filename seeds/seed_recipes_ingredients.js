/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("recipes_ingredients").del();
  await knex("recipes_ingredients").insert([
    { recipe_id: 1, ingredient_id: 1, quantity: "200g" }, // Spaghetti
    { recipe_id: 1, ingredient_id: 2, quantity: "2 large" }, // Eggs
    { recipe_id: 1, ingredient_id: 3, quantity: "100g, diced" }, // Pancetta
    { recipe_id: 1, ingredient_id: 4, quantity: "50g, grated" }, // Pecorino Romano Cheese
    { recipe_id: 1, ingredient_id: 5, quantity: "1 tsp" }, // Black Pepper
    { recipe_id: 1, ingredient_id: 6, quantity: "1/2 tsp" }, // Salt

    // 🍝 Spaghetti & Meatballs (Recipe ID: 2)
    { recipe_id: 2, ingredient_id: 1, quantity: "250g" }, // Spaghetti
    { recipe_id: 2, ingredient_id: 7, quantity: "200g, ground" }, // Ground Beef
    { recipe_id: 2, ingredient_id: 8, quantity: "1/2 cup" }, // Bread Crumbs
    { recipe_id: 2, ingredient_id: 9, quantity: "50g, grated" }, // Parmesan Cheese
    { recipe_id: 2, ingredient_id: 10, quantity: "2 cloves, minced" }, // Garlic
    { recipe_id: 2, ingredient_id: 11, quantity: "1/4 cup" }, // Milk
    { recipe_id: 2, ingredient_id: 12, quantity: "2 tbsp, chopped" }, // Parsley
    { recipe_id: 2, ingredient_id: 13, quantity: "1 can (400g)" }, // Canned Tomatoes
    { recipe_id: 2, ingredient_id: 14, quantity: "2 tbsp" }, // Olive Oil
    { recipe_id: 2, ingredient_id: 15, quantity: "1 small, diced" }, // Onion
    { recipe_id: 2, ingredient_id: 6, quantity: "1/2 tsp" }, // Salt
    { recipe_id: 2, ingredient_id: 5, quantity: "1/2 tsp" }, // Black Pepper

    // 🍕 Margherita Pizza (Recipe ID: 3)
    { recipe_id: 3, ingredient_id: 16, quantity: "1 large" }, // Pizza Dough
    { recipe_id: 3, ingredient_id: 17, quantity: "1/2 cup" }, // Tomato Sauce
    { recipe_id: 3, ingredient_id: 18, quantity: "150g, sliced" }, // Fresh Mozzarella
    { recipe_id: 3, ingredient_id: 19, quantity: "5-6 leaves" }, // Basil
    { recipe_id: 3, ingredient_id: 14, quantity: "1 tbsp" }, // Olive Oil
    { recipe_id: 3, ingredient_id: 6, quantity: "1/2 tsp" }, // Salt

    // 🍞 Bruschetta (Recipe ID: 4)
    { recipe_id: 4, ingredient_id: 20, quantity: "1 baguette, sliced" }, // Baguette
    { recipe_id: 4, ingredient_id: 21, quantity: "2 large, diced" }, // Tomato
    { recipe_id: 4, ingredient_id: 19, quantity: "3-4 leaves, chopped" }, // Basil
    { recipe_id: 4, ingredient_id: 14, quantity: "2 tbsp" }, // Olive Oil
    { recipe_id: 4, ingredient_id: 22, quantity: "1 tbsp" }, // Balsamic Vinegar
    { recipe_id: 4, ingredient_id: 6, quantity: "1/2 tsp" }, // Salt

    // 🍲 Lasagna (Recipe ID: 5)
    { recipe_id: 5, ingredient_id: 7, quantity: "200g, ground" }, // Ground Beef
    { recipe_id: 5, ingredient_id: 23, quantity: "200g, ground" }, // Ground Pork
    { recipe_id: 5, ingredient_id: 15, quantity: "1 medium, diced" }, // Onion
    { recipe_id: 5, ingredient_id: 10, quantity: "2 cloves, minced" }, // Garlic
    { recipe_id: 5, ingredient_id: 24, quantity: "2 tbsp" }, // Tomato Paste
    { recipe_id: 5, ingredient_id: 13, quantity: "1 can (400g)" }, // Canned Tomatoes
    { recipe_id: 5, ingredient_id: 14, quantity: "2 tbsp" }, // Olive Oil
    { recipe_id: 5, ingredient_id: 12, quantity: "2 tbsp, chopped" }, // Parsley
    { recipe_id: 5, ingredient_id: 25, quantity: "250g" }, // Ricotta Cheese
    { recipe_id: 5, ingredient_id: 9, quantity: "50g, grated" }, // Parmesan Cheese
    { recipe_id: 5, ingredient_id: 27, quantity: "150g, shredded" }, // Mozzarella Cheese
    { recipe_id: 5, ingredient_id: 26, quantity: "8 sheets" }, // Lasagna Sheets
    { recipe_id: 5, ingredient_id: 6, quantity: "1/2 tsp" }, // Salt
    { recipe_id: 5, ingredient_id: 5, quantity: "1/2 tsp" }, // Black Pepper

    // 🍲 Chicken Noodle Soup (Recipe ID: 6)
    { recipe_id: 6, ingredient_id: 28, quantity: "2, boneless & skinless" }, // Chicken Breast
    { recipe_id: 6, ingredient_id: 32, quantity: "4 cups" }, // Chicken Broth
    { recipe_id: 6, ingredient_id: 15, quantity: "1 medium, diced" }, // Onion
    { recipe_id: 6, ingredient_id: 30, quantity: "2, diced" }, // Carrots
    { recipe_id: 6, ingredient_id: 31, quantity: "2 stalks, chopped" }, // Celery
    { recipe_id: 6, ingredient_id: 29, quantity: "150g, egg noodles" }, // Egg Noodles
    { recipe_id: 6, ingredient_id: 33, quantity: "1 tbsp" }, // Butter
    { recipe_id: 6, ingredient_id: 34, quantity: "1 tsp, chopped" }, // Thyme
    { recipe_id: 6, ingredient_id: 35, quantity: "1" }, // Bay Leaf
    { recipe_id: 6, ingredient_id: 6, quantity: "1 tsp" }, // Salt
    { recipe_id: 6, ingredient_id: 5, quantity: "1/2 tsp" }, // Black Pepper

    // 🥗 Caesar Salad (Recipe ID: 7)
    { recipe_id: 7, ingredient_id: 36, quantity: "1 head, chopped" }, // Romaine Lettuce
    { recipe_id: 7, ingredient_id: 38, quantity: "1/4 cup" }, // Caesar Dressing
    { recipe_id: 7, ingredient_id: 37, quantity: "1/2 cup" }, // Croutons
    { recipe_id: 7, ingredient_id: 9, quantity: "1/4 cup, grated" }, // Parmesan Cheese
    { recipe_id: 7, ingredient_id: 39, quantity: "1 tbsp, squeezed" }, // Lemon Juice

    // 🍔 Cheeseburger (Recipe ID: 8)
    { recipe_id: 8, ingredient_id: 7, quantity: "200g, ground" }, // Ground Beef
    { recipe_id: 8, ingredient_id: 40, quantity: "1" }, // Hamburger Bun
    { recipe_id: 8, ingredient_id: 41, quantity: "1 slice" }, // Cheddar Cheese
    { recipe_id: 8, ingredient_id: 42, quantity: "1 leaf" }, // Lettuce
    { recipe_id: 8, ingredient_id: 21, quantity: "2 slices" }, // Tomato
    { recipe_id: 8, ingredient_id: 43, quantity: "3 slices" }, // Pickles
    { recipe_id: 8, ingredient_id: 44, quantity: "1 tbsp" }, // Ketchup
    { recipe_id: 8, ingredient_id: 45, quantity: "1 tsp" }, // Mustard
    { recipe_id: 8, ingredient_id: 46, quantity: "1 tbsp" }, // Mayonnaise
    { recipe_id: 8, ingredient_id: 6, quantity: "1/2 tsp" }, // Salt
    { recipe_id: 8, ingredient_id: 5, quantity: "1/4 tsp" }, // Black Pepper

    // 🥑 Avocado Toast (Recipe ID: 9)
    { recipe_id: 9, ingredient_id: 47, quantity: "2 slices" }, // Bread
    { recipe_id: 9, ingredient_id: 48, quantity: "1, mashed" }, // Avocado
    { recipe_id: 9, ingredient_id: 39, quantity: "1 tbsp, squeezed" }, // Lemon Juice
    { recipe_id: 9, ingredient_id: 6, quantity: "1/4 tsp" }, // Salt
    { recipe_id: 9, ingredient_id: 5, quantity: "1/4 tsp" }, // Black Pepper
    { recipe_id: 9, ingredient_id: 49, quantity: "3-4, halved (optional)" }, // Cherry Tomatoes

    // 🦞 Lobster Bisque (Recipe ID: 10)
    { recipe_id: 10, ingredient_id: 50, quantity: "1 whole, cooked & chopped" }, // Lobster
    { recipe_id: 10, ingredient_id: 32, quantity: "3 cups" }, // Chicken Broth
    { recipe_id: 10, ingredient_id: 51, quantity: "1/2 cup" }, // Heavy Cream
    { recipe_id: 10, ingredient_id: 52, quantity: "1/4 cup" }, // White Wine
    { recipe_id: 10, ingredient_id: 15, quantity: "1 small, diced" }, // Onion
    { recipe_id: 10, ingredient_id: 10, quantity: "2 cloves, minced" }, // Garlic
    { recipe_id: 10, ingredient_id: 53, quantity: "1/2 tsp" }, // Paprika
    { recipe_id: 10, ingredient_id: 6, quantity: "1/2 tsp" }, // Salt
    { recipe_id: 10, ingredient_id: 5, quantity: "1/4 tsp" }, // Black Pepper
    { recipe_id: 10, ingredient_id: 33, quantity: "2 tbsp" }, // Butter

    // 🌮 Fish Tacos (Recipe ID: 11)
    { recipe_id: 11, ingredient_id: 54, quantity: "200g, fillet" }, // White Fish
    { recipe_id: 11, ingredient_id: 6, quantity: "1/2 tsp" }, // Salt
    { recipe_id: 11, ingredient_id: 5, quantity: "1/4 tsp" }, // Black Pepper
    { recipe_id: 11, ingredient_id: 59, quantity: "1/2 tsp" }, // Chili Powder
    { recipe_id: 11, ingredient_id: 58, quantity: "1/2 tsp" }, // Cumin
    { recipe_id: 11, ingredient_id: 55, quantity: "4 small" }, // Corn Tortilla
    { recipe_id: 11, ingredient_id: 56, quantity: "1 cup, shredded" }, // Cabbage
    { recipe_id: 11, ingredient_id: 57, quantity: "2 tbsp, chopped" }, // Cilantro
    { recipe_id: 11, ingredient_id: 61, quantity: "1, sliced" }, // Lime
    { recipe_id: 11, ingredient_id: 60, quantity: "2 tbsp" }, // Sour Cream

    // 🥑 Guacamole (Recipe ID: 12)
    { recipe_id: 12, ingredient_id: 48, quantity: "2, mashed" }, // Avocado
    { recipe_id: 12, ingredient_id: 21, quantity: "1, diced" }, // Tomato
    { recipe_id: 12, ingredient_id: 10, quantity: "1 clove, minced" }, // Garlic
    { recipe_id: 12, ingredient_id: 6, quantity: "1/2 tsp" }, // Salt
    { recipe_id: 12, ingredient_id: 5, quantity: "1/4 tsp" }, // Black Pepper
    { recipe_id: 12, ingredient_id: 57, quantity: "2 tbsp, chopped" }, // Cilantro
    { recipe_id: 12, ingredient_id: 61, quantity: "1 tbsp, squeezed" }, // Lime Juice

    // 🍤 Ceviche (Recipe ID: 13)
    { recipe_id: 13, ingredient_id: 54, quantity: "200g, diced" }, // White Fish
    { recipe_id: 13, ingredient_id: 61, quantity: "1/2 cup, freshly squeezed" }, // Lime Juice
    { recipe_id: 13, ingredient_id: 57, quantity: "2 tbsp, chopped" }, // Cilantro
    { recipe_id: 13, ingredient_id: 21, quantity: "1, diced" }, // Tomato
    { recipe_id: 13, ingredient_id: 10, quantity: "1 clove, minced" }, // Garlic
    { recipe_id: 13, ingredient_id: 6, quantity: "1/2 tsp" }, // Salt
    { recipe_id: 13, ingredient_id: 5, quantity: "1/4 tsp" }, // Black Pepper
    {
      recipe_id: 13,
      ingredient_id: 56,
      quantity: "1/2 cup, shredded (optional)",
    }, // Cabbage

    // 🌮 Tacos al Pastor (Recipe ID: 14)
    { recipe_id: 14, ingredient_id: 62, quantity: "300g, sliced" }, // Pork Loin
    { recipe_id: 14, ingredient_id: 64, quantity: "2 tbsp" }, // Achiote Paste
    { recipe_id: 14, ingredient_id: 65, quantity: "1/4 cup" }, // Orange Juice
    { recipe_id: 14, ingredient_id: 66, quantity: "1 tbsp" }, // White Vinegar
    { recipe_id: 14, ingredient_id: 57, quantity: "2 tbsp, chopped" }, // Cilantro
    { recipe_id: 14, ingredient_id: 55, quantity: "4 small" }, // Corn Tortilla
    { recipe_id: 14, ingredient_id: 63, quantity: "1/2 cup, diced" }, // Pineapple
    { recipe_id: 14, ingredient_id: 15, quantity: "1 small, chopped" }, // Onion
    { recipe_id: 14, ingredient_id: 6, quantity: "1/2 tsp" }, // Salt
    { recipe_id: 14, ingredient_id: 5, quantity: "1/4 tsp" }, // Black Pepper
    { recipe_id: 14, ingredient_id: 59, quantity: "1/2 tsp" }, // Chili Powder
    { recipe_id: 14, ingredient_id: 58, quantity: "1/2 tsp" }, // Cumin
    { recipe_id: 14, ingredient_id: 67, quantity: "1/2 tsp" }, // Oregano

    // 🌯 Chicken Enchiladas (Recipe ID: 15)
    { recipe_id: 15, ingredient_id: 28, quantity: "2, shredded" }, // Chicken Breast
    { recipe_id: 15, ingredient_id: 55, quantity: "4 small" }, // Corn Tortilla
    { recipe_id: 15, ingredient_id: 68, quantity: "1/2 cup" }, // Enchilada Sauce
    { recipe_id: 15, ingredient_id: 9, quantity: "1/4 cup, grated" }, // Parmesan Cheese
    { recipe_id: 15, ingredient_id: 27, quantity: "1/2 cup, shredded" }, // Mozzarella Cheese
    { recipe_id: 15, ingredient_id: 12, quantity: "2 tbsp, chopped" }, // Parsley
    { recipe_id: 15, ingredient_id: 60, quantity: "2 tbsp" }, // Sour Cream
    { recipe_id: 15, ingredient_id: 6, quantity: "1/2 tsp" }, // Salt
    { recipe_id: 15, ingredient_id: 5, quantity: "1/4 tsp" }, // Black Pepper

    // 🍚 Fried Rice (Recipe ID: 16)
    { recipe_id: 16, ingredient_id: 69, quantity: "2 cups, cooked (day-old)" }, // Rice
    { recipe_id: 16, ingredient_id: 2, quantity: "2, beaten" }, // Eggs
    { recipe_id: 16, ingredient_id: 15, quantity: "1 small, diced" }, // Onion
    { recipe_id: 16, ingredient_id: 72, quantity: "1/2 cup" }, // Peas
    { recipe_id: 16, ingredient_id: 14, quantity: "1 tbsp" }, // Olive Oil
    { recipe_id: 16, ingredient_id: 70, quantity: "2 tbsp" }, // Soy Sauce
    { recipe_id: 16, ingredient_id: 74, quantity: "1 tsp" }, // Sesame Oil
    { recipe_id: 16, ingredient_id: 6, quantity: "1/2 tsp" }, // Salt
    { recipe_id: 16, ingredient_id: 5, quantity: "1/4 tsp" }, // Black Pepper
    { recipe_id: 16, ingredient_id: 71, quantity: "1 tbsp, chopped" }, // Green Onion

    // 🌶️ Mapo Tofu (Recipe ID: 17)
    { recipe_id: 17, ingredient_id: 90, quantity: "1 block, diced" }, // Tofu
    { recipe_id: 17, ingredient_id: 23, quantity: "150g, ground" }, // Ground Pork
    { recipe_id: 17, ingredient_id: 15, quantity: "1 small, diced" }, // Onion
    { recipe_id: 17, ingredient_id: 10, quantity: "2 cloves, minced" }, // Garlic
    { recipe_id: 17, ingredient_id: 79, quantity: "1 tbsp" }, // Chili Bean Paste
    { recipe_id: 17, ingredient_id: 80, quantity: "1 tsp, ground" }, // Sichuan Peppercorn
    { recipe_id: 17, ingredient_id: 70, quantity: "1 tbsp" }, // Soy Sauce
    { recipe_id: 17, ingredient_id: 81, quantity: "1 tbsp" }, // Chili Oil
    { recipe_id: 17, ingredient_id: 89, quantity: "1 tsp, dissolved in water" }, // Cornstarch
    { recipe_id: 17, ingredient_id: 71, quantity: "1 tbsp, chopped" }, // Green Onion

    // 🍲 Hong Kong Borscht Soup (Recipe ID: 18)
    { recipe_id: 18, ingredient_id: 75, quantity: "200g, beef brisket, cubed" }, // Beef Brisket
    { recipe_id: 18, ingredient_id: 15, quantity: "1 medium, diced" }, // Onion
    { recipe_id: 18, ingredient_id: 30, quantity: "1, diced" }, // Carrot
    { recipe_id: 18, ingredient_id: 76, quantity: "1, diced" }, // Potato
    { recipe_id: 18, ingredient_id: 13, quantity: "1 can (400g)" }, // Canned Tomatoes
    { recipe_id: 18, ingredient_id: 24, quantity: "2 tbsp" }, // Tomato Paste
    { recipe_id: 18, ingredient_id: 77, quantity: "3 cups" }, // Beef Broth
    { recipe_id: 18, ingredient_id: 6, quantity: "1/2 tsp" }, // Salt
    { recipe_id: 18, ingredient_id: 5, quantity: "1/4 tsp" }, // Black Pepper
    { recipe_id: 18, ingredient_id: 35, quantity: "1" }, // Bay Leaf

    // 🌶️ Kung Pao Chicken (Recipe ID: 19)
    { recipe_id: 19, ingredient_id: 28, quantity: "200g, diced" }, // Chicken Breast
    { recipe_id: 19, ingredient_id: 71, quantity: "1 tbsp, chopped" }, // Green Onion
    { recipe_id: 19, ingredient_id: 10, quantity: "2 cloves, minced" }, // Garlic
    { recipe_id: 19, ingredient_id: 86, quantity: "5-6, whole" }, // Dried Red Chilies
    { recipe_id: 19, ingredient_id: 85, quantity: "1/4 cup, roasted" }, // Peanuts
    { recipe_id: 19, ingredient_id: 70, quantity: "2 tbsp" }, // Soy Sauce
    { recipe_id: 19, ingredient_id: 87, quantity: "1 tbsp" }, // Oyster Sauce
    { recipe_id: 19, ingredient_id: 74, quantity: "1 tsp" }, // Sesame Oil
    { recipe_id: 19, ingredient_id: 89, quantity: "1 tsp, dissolved in water" }, // Cornstarch
    { recipe_id: 19, ingredient_id: 6, quantity: "1/2 tsp" }, // Salt
    { recipe_id: 19, ingredient_id: 5, quantity: "1/4 tsp" }, // Black Pepper

    // 🍜 Dan Dan Noodles (Recipe ID: 20)
    { recipe_id: 20, ingredient_id: 78, quantity: "200g" }, // Noodles
    { recipe_id: 20, ingredient_id: 23, quantity: "150g, ground" }, // Ground Pork
    { recipe_id: 20, ingredient_id: 15, quantity: "1 small, diced" }, // Onion
    { recipe_id: 20, ingredient_id: 10, quantity: "2 cloves, minced" }, // Garlic
    { recipe_id: 20, ingredient_id: 79, quantity: "1 tbsp" }, // Chili Bean Paste
    { recipe_id: 20, ingredient_id: 80, quantity: "1 tsp, ground" }, // Sichuan Peppercorn
    { recipe_id: 20, ingredient_id: 81, quantity: "1 tbsp" }, // Chili Oil
    { recipe_id: 20, ingredient_id: 82, quantity: "1 tbsp" }, // Vinegar
    { recipe_id: 20, ingredient_id: 83, quantity: "1 tbsp" }, // Sesame Paste
    { recipe_id: 20, ingredient_id: 85, quantity: "2 tbsp, chopped" }, // Peanuts
    { recipe_id: 20, ingredient_id: 70, quantity: "2 tbsp" }, // Soy Sauce
    { recipe_id: 20, ingredient_id: 89, quantity: "1 tsp, dissolved in water" }, // Cornstarch
    { recipe_id: 20, ingredient_id: 6, quantity: "1/2 tsp" }, // Salt
    { recipe_id: 20, ingredient_id: 5, quantity: "1/4 tsp" }, // Black Pepper
    // 🍲 Soft Tofu Stew with Seafood (Sundubu Jjigae) (Recipe ID: 21)
    { recipe_id: 21, ingredient_id: 91, quantity: "1 block, soft" }, // Soft Tofu
    { recipe_id: 21, ingredient_id: 92, quantity: "6, cleaned" }, // Mussels
    { recipe_id: 21, ingredient_id: 93, quantity: "6, peeled" }, // Shrimp
    { recipe_id: 21, ingredient_id: 94, quantity: "1/4 cup, dried" }, // Dried Anchovies
    { recipe_id: 21, ingredient_id: 95, quantity: "1 small piece" }, // Kelp
    { recipe_id: 21, ingredient_id: 99, quantity: "1 tbsp" }, // Gochugaru (Korean Red Pepper Flakes)
    { recipe_id: 21, ingredient_id: 100, quantity: "1 tbsp" }, // Gochujang (Korean Chili Paste)
    { recipe_id: 21, ingredient_id: 6, quantity: "1/2 tsp" }, // Salt
    { recipe_id: 21, ingredient_id: 5, quantity: "1/4 tsp" }, // Black Pepper
    { recipe_id: 21, ingredient_id: 71, quantity: "1 tbsp, chopped" }, // Green Onion

    // 🍲 Kimchi Stew (Kimchi Jjigae) (Recipe ID: 22)
    { recipe_id: 22, ingredient_id: 97, quantity: "1 cup, chopped" }, // Aged Kimchi
    { recipe_id: 22, ingredient_id: 98, quantity: "150g, sliced" }, // Pork Belly
    { recipe_id: 22, ingredient_id: 6, quantity: "1/2 tsp" }, // Salt
    { recipe_id: 22, ingredient_id: 5, quantity: "1/4 tsp" }, // Black Pepper
    { recipe_id: 22, ingredient_id: 99, quantity: "1 tbsp" }, // Gochugaru (Korean Red Pepper Flakes)
    { recipe_id: 22, ingredient_id: 100, quantity: "1 tbsp" }, // Gochujang (Korean Chili Paste)
    { recipe_id: 22, ingredient_id: 71, quantity: "1 tbsp, chopped" }, // Green Onion
    { recipe_id: 22, ingredient_id: 6, quantity: "1/2 tsp" }, // Salt

    // 🍜 Jjajangmyeon (Recipe ID: 23)
    { recipe_id: 23, ingredient_id: 78, quantity: "200g" }, // Noodles
    { recipe_id: 23, ingredient_id: 23, quantity: "150g, ground" }, // Ground Pork
    { recipe_id: 23, ingredient_id: 101, quantity: "2 tbsp" }, // Black Bean Paste
    { recipe_id: 23, ingredient_id: 15, quantity: "1 small, diced" }, // Onion
    { recipe_id: 23, ingredient_id: 102, quantity: "1/2 cup, diced" }, // Zucchini
    { recipe_id: 23, ingredient_id: 6, quantity: "1/2 tsp" }, // Salt
    { recipe_id: 23, ingredient_id: 5, quantity: "1/4 tsp" }, // Black Pepper
    { recipe_id: 23, ingredient_id: 89, quantity: "1 tsp, dissolved in water" }, // Cornstarch

    // 🍚 Bibimbap (Recipe ID: 24)
    { recipe_id: 24, ingredient_id: 69, quantity: "2 cups, cooked" }, // Rice
    { recipe_id: 24, ingredient_id: 28, quantity: "150g, sliced" }, // Chicken Breast
    { recipe_id: 24, ingredient_id: 104, quantity: "1/2 cup, blanched" }, // Bean Sprouts
    { recipe_id: 24, ingredient_id: 108, quantity: "1/2 cup, blanched" }, // Spinach
    { recipe_id: 24, ingredient_id: 10, quantity: "1 clove, minced" }, // Garlic
    { recipe_id: 24, ingredient_id: 73, quantity: "1 tsp, grated" }, // Ginger
    { recipe_id: 24, ingredient_id: 99, quantity: "1 tbsp" }, // Gochugaru (Korean Red Pepper Flakes)
    { recipe_id: 24, ingredient_id: 100, quantity: "1 tbsp" }, // Gochujang (Korean Chili Paste)
    { recipe_id: 24, ingredient_id: 2, quantity: "1, fried" }, // Egg
    { recipe_id: 24, ingredient_id: 6, quantity: "1/2 tsp" }, // Salt
    { recipe_id: 24, ingredient_id: 5, quantity: "1/4 tsp" }, // Black Pepper

    // 🍜 Japchae (Recipe ID: 25)
    { recipe_id: 25, ingredient_id: 106, quantity: "200g" }, // Sweet Potato Starch Noodles
    { recipe_id: 25, ingredient_id: 107, quantity: "150g, sliced" }, // Beef
    { recipe_id: 25, ingredient_id: 102, quantity: "1/2 cup, julienned" }, // Zucchini
    { recipe_id: 25, ingredient_id: 15, quantity: "1 small, sliced" }, // Onion
    { recipe_id: 25, ingredient_id: 109, quantity: "4, sliced" }, // Shiitake Mushroom
    { recipe_id: 25, ingredient_id: 74, quantity: "1 tbsp" }, // Sesame Oil
    { recipe_id: 25, ingredient_id: 87, quantity: "1 tbsp" }, // Oyster Sauce
    { recipe_id: 25, ingredient_id: 6, quantity: "1/2 tsp" }, // Salt
    { recipe_id: 25, ingredient_id: 5, quantity: "1/4 tsp" }, // Black Pepper
    { recipe_id: 25, ingredient_id: 105, quantity: "1 tbsp, toasted" }, // Sesame Seeds
    // 🍛 Katsu Curry (Recipe ID: 26)
    { recipe_id: 26, ingredient_id: 110, quantity: "1, breaded and fried" }, // Pork Cutlet
    { recipe_id: 26, ingredient_id: 69, quantity: "2 cups, cooked" }, // Rice
    { recipe_id: 26, ingredient_id: 112, quantity: "1 block" }, // Japanese Curry Roux
    { recipe_id: 26, ingredient_id: 15, quantity: "1 small, diced" }, // Onion
    { recipe_id: 26, ingredient_id: 30, quantity: "1, diced" }, // Carrot
    { recipe_id: 26, ingredient_id: 76, quantity: "1, diced" }, // Potato
    { recipe_id: 26, ingredient_id: 14, quantity: "1 tbsp" }, // Olive Oil
    { recipe_id: 26, ingredient_id: 6, quantity: "1/2 tsp" }, // Salt
    { recipe_id: 26, ingredient_id: 5, quantity: "1/4 tsp" }, // Black Pepper

    // 🍜 Miso Ramen (Recipe ID: 27)
    { recipe_id: 27, ingredient_id: 115, quantity: "200g" }, // Ramen Noodles
    { recipe_id: 27, ingredient_id: 113, quantity: "2 tbsp" }, // Miso Paste
    { recipe_id: 27, ingredient_id: 114, quantity: "3 cups" }, // Dashi Stock
    { recipe_id: 27, ingredient_id: 116, quantity: "100g, sliced" }, // Chashu Pork
    { recipe_id: 27, ingredient_id: 2, quantity: "1, soft-boiled" }, // Egg
    { recipe_id: 27, ingredient_id: 71, quantity: "1 tbsp, chopped" }, // Green Onion
    { recipe_id: 27, ingredient_id: 117, quantity: "1/4 cup" }, // Corn
    { recipe_id: 27, ingredient_id: 118, quantity: "1 sheet, sliced" }, // Nori
    { recipe_id: 27, ingredient_id: 74, quantity: "1 tsp" }, // Sesame Oil
    { recipe_id: 27, ingredient_id: 6, quantity: "1/2 tsp" }, // Salt

    // 🍣 Salmon Avocado Roll (Recipe ID: 28)
    {
      recipe_id: 28,
      ingredient_id: 119,
      quantity: "2 cups, cooked & seasoned",
    }, // Sushi Rice
    { recipe_id: 28, ingredient_id: 120, quantity: "100g, sliced" }, // Salmon Sashimi
    { recipe_id: 28, ingredient_id: 48, quantity: "1, sliced" }, // Avocado
    { recipe_id: 28, ingredient_id: 118, quantity: "1 sheet" }, // Nori
    { recipe_id: 28, ingredient_id: 122, quantity: "1/2 tsp" }, // Wasabi
    { recipe_id: 28, ingredient_id: 123, quantity: "1 tbsp, sliced" }, // Pickled Ginger
    { recipe_id: 28, ingredient_id: 88, quantity: "1 tbsp" }, // Rice Vinegar

    // 🥞 Okonomiyaki (Recipe ID: 29)
    { recipe_id: 29, ingredient_id: 111, quantity: "1/2 cup" }, // Flour
    { recipe_id: 29, ingredient_id: 114, quantity: "1/2 cup" }, // Dashi Stock
    { recipe_id: 29, ingredient_id: 2, quantity: "1, beaten" }, // Egg
    { recipe_id: 29, ingredient_id: 56, quantity: "1 cup, shredded" }, // Cabbage
    { recipe_id: 29, ingredient_id: 110, quantity: "100g, chopped" }, // Pork Cutlet
    { recipe_id: 29, ingredient_id: 124, quantity: "2 tbsp" }, // Okonomiyaki Sauce
    { recipe_id: 29, ingredient_id: 125, quantity: "1 tbsp" }, // Kewpie Mayonnaise
    { recipe_id: 29, ingredient_id: 126, quantity: "1 tbsp" }, // Bonito Flakes
    { recipe_id: 29, ingredient_id: 6, quantity: "1/2 tsp" }, // Salt

    // 🐔 Oyakodon (Recipe ID: 30)
    { recipe_id: 30, ingredient_id: 69, quantity: "2 cups, cooked" }, // Rice
    { recipe_id: 30, ingredient_id: 127, quantity: "150g, sliced" }, // Chicken Thigh
    { recipe_id: 30, ingredient_id: 113, quantity: "1/2 tbsp" }, // Miso Paste
    { recipe_id: 30, ingredient_id: 128, quantity: "1 tbsp" }, // Mirin
    { recipe_id: 30, ingredient_id: 2, quantity: "2, lightly beaten" }, // Eggs
    { recipe_id: 30, ingredient_id: 71, quantity: "1 tbsp, chopped" }, // Green Onion
    { recipe_id: 30, ingredient_id: 6, quantity: "1/2 tsp" }, // Salt
  ]);
}

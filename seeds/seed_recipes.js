/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("recipes").del();
  await knex("recipes").insert([
    {
      id: 1,
      recipe_name: "Spaghetti Carbonara",
      description:
        "A classic Italian pasta dish with creamy egg sauce, pancetta, and Pecorino Romano.",
      difficulty_level: "Medium",
      prep_time: 10,
      cook_time: 25,
      servings: 2,
      instructions:
        "1. **Cook the spaghetti**: Bring a pot of salted water to a boil and cook spaghetti until al dente. Reserve ½ cup of pasta water before draining.\n" +
        "2. **Prepare the pancetta**: In a pan over medium heat, cook diced pancetta until crispy. Remove from heat.\n" +
        "3. **Make the sauce**: In a bowl, whisk together eggs, grated Pecorino Romano, and black pepper.\n" +
        "4. **Combine everything**: Add hot spaghetti to the pancetta pan, mix, then slowly pour in the egg mixture while stirring vigorously to prevent scrambling.\n" +
        "5. **Adjust consistency**: Add reserved pasta water gradually to create a creamy sauce.\n" +
        "6. **Serve immediately** with extra Pecorino Romano and black pepper on top.",
      image_url: "spaghetti_carbonara.jpg",
      cuisine_id: 1,
    },
    {
      id: 2,
      recipe_name: "Spaghetti & Meatballs",
      description:
        "Traditional spaghetti served with homemade meatballs in a rich tomato sauce.",
      difficulty_level: "Medium",
      prep_time: 15,
      cook_time: 40,
      servings: 4,
      instructions:
        "1. **Make the meatballs**: In a bowl, mix ground beef, bread crumbs, Parmesan, egg, garlic, parsley, salt, and pepper. Form into balls.\n" +
        "2. **Cook the meatballs**: Heat oil in a pan and fry the meatballs until browned on all sides.\n" +
        "3. **Prepare the sauce**: In a separate pan, sauté onions and garlic, then add canned tomatoes, tomato paste, basil, salt, and pepper. Simmer for 15 minutes.\n" +
        "4. **Combine**: Add meatballs to the sauce and simmer for another 15 minutes until cooked through.\n" +
        "5. **Cook the spaghetti**: Boil salted water and cook spaghetti until al dente. Drain and mix with sauce.\n" +
        "6. **Serve hot** with extra Parmesan cheese.",
      image_url: "spaghetti_meatballs.jpg",
      cuisine_id: 1,
    },
    {
      id: 3,
      recipe_name: "Margherita Pizza",
      description:
        "Classic Italian pizza with fresh tomatoes, mozzarella, and basil.",
      difficulty_level: "Medium",
      prep_time: 20,
      cook_time: 30,
      servings: 2,
      instructions:
        "1. **Preheat oven** to 475°F (245°C) and place a pizza stone or baking sheet inside.\n" +
        "2. **Prepare the dough**: Roll out pizza dough on a floured surface into a thin circle.\n" +
        "3. **Add sauce**: Spread a thin layer of tomato sauce evenly over the dough.\n" +
        "4. **Top with cheese**: Add slices of fresh mozzarella.\n" +
        "5. **Bake**: Transfer to a preheated oven and bake for 10-12 minutes until the crust is golden and cheese is bubbly.\n" +
        "6. **Garnish & serve**: Remove from the oven, top with fresh basil, drizzle with olive oil, and serve hot.",
      image_url: "margherita_pizza.jpg",
      cuisine_id: 1,
    },
    {
      id: 4,
      recipe_name: "Bruschetta",
      description:
        "Toasted bread topped with fresh tomatoes, basil, and olive oil.",
      difficulty_level: "Easy",
      prep_time: 10,
      cook_time: 5,
      servings: 4,
      instructions:
        "1. **Prepare the tomatoes**: Dice fresh tomatoes and place them in a bowl.\n" +
        "2. **Season the mixture**: Add chopped basil, minced garlic, salt, black pepper, and olive oil. Stir well and let sit for 5 minutes to enhance flavor.\n" +
        "3. **Toast the bread**: Slice a baguette or Italian bread into pieces. Brush with olive oil and toast in a pan or oven at 375°F (190°C) for 5 minutes until golden and crispy.\n" +
        "4. **Assemble the bruschetta**: Spoon the tomato mixture onto each toasted bread slice.\n" +
        "5. **Finish with garnish**: Drizzle with balsamic vinegar (optional) and serve immediately.",
      image_url: "bruschetta.jpg",
      cuisine_id: 1,
    },
    {
      id: 5,
      recipe_name: "Lasagna",
      description: "Layered pasta dish with meat, cheese, and tomato sauce.",
      difficulty_level: "Hard",
      prep_time: 30,
      cook_time: 60,
      servings: 6,
      instructions:
        "1. **Cook the pasta**: Boil lasagna sheets in salted water until al dente. Drain and set aside.\n" +
        "2. **Prepare the meat sauce**: In a pan, sauté diced onions and garlic in olive oil. Add ground beef or pork and cook until browned.\n" +
        "3. **Simmer the sauce**: Stir in canned tomatoes, tomato paste, oregano, basil, salt, and black pepper. Let simmer for 20 minutes until thickened.\n" +
        "4. **Make the ricotta mixture**: In a bowl, mix ricotta cheese, egg, and grated Parmesan. Set aside.\n" +
        "5. **Layer the lasagna**: In a baking dish, spread a thin layer of meat sauce, followed by pasta sheets, ricotta mixture, shredded mozzarella, and more sauce. Repeat layers until full.\n" +
        "6. **Bake at 375°F (190°C) for 40 minutes** until cheese is bubbly and golden.\n" +
        "7. **Rest and serve**: Let lasagna sit for 10 minutes before slicing. Garnish with fresh basil and enjoy.",
      image_url: "lasagna.jpg",
      cuisine_id: 1,
    },

    // 🍔 American Recipes
    {
      id: 6,
      recipe_name: "Chicken Noodle Soup",
      description:
        "A comforting soup with tender chicken, egg noodles, and vegetables.",
      difficulty_level: "Easy",
      prep_time: 15,
      cook_time: 40,
      servings: 4,
      instructions:
        "1. **Prepare the broth**: In a large pot, bring chicken broth to a simmer. Add bay leaf, thyme, salt, and pepper.\n" +
        "2. **Cook the chicken**: Add boneless chicken breast and simmer for 20 minutes until fully cooked. Remove, shred with forks, and return to the pot.\n" +
        "3. **Sauté vegetables**: In a separate pan, sauté diced onions, carrots, and celery in butter until softened. Add to the broth.\n" +
        "4. **Cook noodles**: Add egg noodles and cook for 8-10 minutes until tender.\n" +
        "5. **Finish and serve**: Adjust seasoning, remove bay leaf, and serve hot.",
      image_url: "chicken_noodle_soup.jpg",
      cuisine_id: 2,
    },
    {
      id: 7,
      recipe_name: "Caesar Salad",
      description:
        "Romaine lettuce with Caesar dressing, croutons, and Parmesan.",
      difficulty_level: "Easy",
      prep_time: 10,
      cook_time: 5,
      servings: 2,
      instructions:
        "1. **Prepare the dressing**: In a bowl, whisk together egg yolk, anchovies, garlic, lemon juice, Dijon mustard, Worcestershire sauce, and olive oil.\n" +
        "2. **Make croutons**: Toss bread cubes with olive oil, salt, and pepper. Bake at 375°F (190°C) for 10 minutes until crispy.\n" +
        "3. **Assemble the salad**: Toss chopped romaine lettuce with Caesar dressing.\n" +
        "4. **Add toppings**: Sprinkle with grated Parmesan cheese and croutons.\n" +
        "5. **Serve immediately**.",
      image_url: "caesar_salad.jpg",
      cuisine_id: 2,
    },
    {
      id: 8,
      recipe_name: "Cheeseburger",
      description:
        "Grilled beef patty served in a bun with cheese and toppings.",
      difficulty_level: "Medium",
      prep_time: 10,
      cook_time: 15,
      servings: 1,
      instructions:
        "1. **Prepare the patty**: Season ground beef with salt and pepper. Form into a round patty.\n" +
        "2. **Cook the patty**: Grill or pan-fry for 3-4 minutes per side.\n" +
        "3. **Melt the cheese**: Add a slice of cheese on top of the patty and cover until melted.\n" +
        "4. **Toast the bun**: Lightly butter and toast the hamburger bun.\n" +
        "5. **Assemble the burger**: Place lettuce, tomato, pickles, and the cooked patty in the bun.\n" +
        "6. **Serve with ketchup, mustard, and mayonnaise**.",
      image_url: "cheeseburger.jpg",
      cuisine_id: 2,
    },
    {
      id: 9,
      recipe_name: "Avocado Toast",
      description: "Toasted bread topped with mashed avocado, lemon, and salt.",
      difficulty_level: "Easy",
      prep_time: 5,
      cook_time: 5,
      servings: 2,
      instructions:
        "1. **Prepare the avocado**: Cut the avocado in half, remove the pit, and scoop the flesh into a bowl.\n" +
        "2. **Mash the avocado**: Use a fork to mash the avocado until smooth or chunky, based on your preference.\n" +
        "3. **Add seasoning**: Mix in fresh lemon juice, salt, and black pepper to taste.\n" +
        "4. **Toast the bread**: Place slices of bread in a toaster or grill until golden and crispy.\n" +
        "5. **Assemble the toast**: Spread the mashed avocado evenly on the toasted bread.\n" +
        "6. **Add toppings (optional)**: Sprinkle with red pepper flakes, feta cheese, cherry tomatoes, or a poached egg for extra flavor.\n" +
        "7. **Serve immediately** and enjoy!",
      image_url: "avocado_toast.jpg",
      cuisine_id: 2,
    },
    {
      id: 10,
      recipe_name: "Lobster Bisque",
      description: "Creamy seafood soup made with lobster and aromatic spices.",
      difficulty_level: "Hard",
      prep_time: 20,
      cook_time: 60,
      servings: 4,
      instructions:
        "1. **Prepare the lobster**: Boil a large pot of salted water and cook the lobster for about 8-10 minutes until bright red.\n" +
        "2. **Extract the meat**: Remove the lobster from the pot, let it cool slightly, then extract the meat from the shell. Chop into small pieces and set aside.\n" +
        "3. **Make the lobster stock**: In a large pot, heat butter and sauté lobster shells with onion, carrot, celery, and garlic for 5 minutes.\n" +
        "4. **Add liquids**: Pour in white wine and cook for 2 minutes. Then, add chicken broth, bay leaf, thyme, salt, and black pepper.\n" +
        "5. **Simmer the stock**: Let the broth simmer for 30 minutes to extract flavor from the shells. Strain and discard the solids, keeping only the broth.\n" +
        "6. **Prepare the bisque base**: In a separate pan, melt butter and stir in flour to make a roux. Slowly whisk in the strained broth, stirring constantly.\n" +
        "7. **Blend and thicken**: Use an immersion blender to puree the soup for a smooth consistency.\n" +
        "8. **Add the lobster meat**: Stir in the chopped lobster meat, heavy cream, and a pinch of paprika.\n" +
        "9. **Simmer for 5 minutes** to allow flavors to blend.\n" +
        "10. **Serve hot** with a drizzle of melted butter and a sprinkle of fresh herbs on top.",
      image_url: "lobster_bisque.jpg",
      cuisine_id: 2,
    },

    // 🌮 Mexican Recipes
    {
      id: 11,
      recipe_name: "Fish Tacos",
      description:
        "Crispy fish in corn tortillas topped with slaw, creamy sauce, and lime.",
      difficulty_level: "Medium",
      prep_time: 15,
      cook_time: 20,
      servings: 3,
      instructions:
        "1. **Prepare the fish**: Season white fish fillets with salt, black pepper, chili powder, and cumin.\n" +
        "2. **Cook the fish**: Either fry in oil until crispy or bake at 375°F (190°C) for 15 minutes.\n" +
        "3. **Make the slaw**: Mix shredded cabbage, lime juice, and cilantro.\n" +
        "4. **Assemble tacos**: Place fish in corn tortillas, top with slaw, and drizzle with sauce.\n" +
        "5. **Serve with lime wedges**.",
      image_url: "fish_tacos.jpg",
      cuisine_id: 3,
    },
    {
      id: 12,
      recipe_name: "Guacamole",
      description:
        "A creamy avocado dip with fresh lime, cilantro, and spices.",
      difficulty_level: "Easy",
      prep_time: 10,
      cook_time: 0,
      servings: 4,
      instructions:
        "1. **Mash avocados** in a bowl until smooth or chunky based on preference.\n" +
        "2. **Add flavors**: Mix in diced onions, tomatoes, cilantro, lime juice, and salt.\n" +
        "3. **Adjust seasoning**: Add black pepper and optional jalapeño for spice.\n" +
        "4. **Serve immediately** with tortilla chips or as a topping.",
      image_url: "guacamole.jpg",
      cuisine_id: 3,
    },
    {
      id: 13,
      recipe_name: "Ceviche",
      description:
        "Fresh seafood marinated in citrus juice with onions, tomatoes, and cilantro.",
      difficulty_level: "Medium",
      prep_time: 20,
      cook_time: 0,
      servings: 4,
      instructions:
        "1. **Prepare seafood**: Dice fresh white fish or shrimp and place in a bowl.\n" +
        "2. **Marinate**: Cover with lime and lemon juice. Let sit for 30 minutes to 'cook' the fish.\n" +
        "3. **Add vegetables**: Mix in diced tomatoes, onions, cilantro, and jalapeños.\n" +
        "4. **Season**: Add salt, black pepper, and optional avocado.\n" +
        "5. **Serve chilled** with tostadas or tortilla chips.",
      image_url: "ceviche.jpg",
      cuisine_id: 3,
    },
    {
      id: 14,
      recipe_name: "Tacos al Pastor",
      description:
        "Marinated pork cooked with pineapple, served in corn tortillas.",
      difficulty_level: "Hard",
      prep_time: 30,
      cook_time: 60,
      servings: 4,
      instructions:
        "1. **Prepare marinade**: Blend achiote paste, orange juice, white vinegar, garlic, cumin, oregano, and chili powder.\n" +
        "2. **Marinate pork**: Coat pork slices with marinade and refrigerate for at least 4 hours.\n" +
        "3. **Cook pork**: Grill or pan-fry until charred and cooked through.\n" +
        "4. **Slice and serve**: Cut pork into small pieces, place in corn tortillas, and top with grilled pineapple, onion, and cilantro.\n" +
        "5. **Serve with lime wedges**.",
      image_url: "tacos_al_pastor.jpg",
      cuisine_id: 3,
    },
    {
      id: 15,
      recipe_name: "Chicken Enchiladas",
      description:
        "Corn tortillas filled with shredded chicken and topped with enchilada sauce.",
      difficulty_level: "Medium",
      prep_time: 20,
      cook_time: 30,
      servings: 4,
      instructions:
        "1. **Prepare chicken**: Shred cooked chicken breast and season with salt, black pepper, and cumin.\n" +
        "2. **Warm tortillas**: Heat corn tortillas to make them pliable.\n" +
        "3. **Fill and roll**: Place chicken in each tortilla, roll tightly, and place in a baking dish.\n" +
        "4. **Add sauce**: Pour enchilada sauce over tortillas and sprinkle with cheese.\n" +
        "5. **Bake at 375°F (190°C) for 20 minutes** until cheese is melted and bubbly.\n" +
        "6. **Serve hot** with sour cream and fresh cilantro.",
      image_url: "chicken_enchiladas.jpg",
      cuisine_id: 3,
    },
    {
      id: 16,
      recipe_name: "Fried Rice",
      description:
        "A classic Chinese dish made with stir-fried rice, eggs, and vegetables.",
      difficulty_level: "Easy",
      prep_time: 10,
      cook_time: 15,
      servings: 2,
      instructions:
        "1. **Prepare the ingredients**: Chop carrots, green onions, and any additional vegetables. Beat the eggs in a bowl.\n" +
        "2. **Cook the eggs**: Heat a wok or pan over medium heat, add oil, and scramble the eggs. Remove and set aside.\n" +
        "3. **Stir-fry the vegetables**: In the same pan, add more oil and sauté onions, carrots, and peas for 2 minutes.\n" +
        "4. **Add the rice**: Stir in day-old cooked rice, breaking up any clumps.\n" +
        "5. **Season and finish**: Add soy sauce, sesame oil, and salt. Toss in the scrambled eggs and mix well.\n" +
        "6. **Garnish & serve**: Sprinkle with chopped green onions and serve hot.",
      image_url: "fried_rice.jpg",
      cuisine_id: 4,
    },
    {
      id: 17,
      recipe_name: "Mapo Tofu",
      description:
        "A spicy Sichuan dish made with tofu, ground pork, and a flavorful sauce.",
      difficulty_level: "Medium",
      prep_time: 10,
      cook_time: 20,
      servings: 3,
      instructions:
        "1. **Prepare the ingredients**: Dice tofu into cubes. Mince garlic and ginger.\n" +
        "2. **Cook the pork**: Heat oil in a wok and stir-fry ground pork until browned.\n" +
        "3. **Add aromatics**: Stir in garlic, ginger, and doubanjiang (chili bean paste). Cook for 1-2 minutes.\n" +
        "4. **Make the sauce**: Add soy sauce, chicken broth, and Sichuan peppercorns. Let simmer for 5 minutes.\n" +
        "5. **Add the tofu**: Gently stir in tofu cubes, being careful not to break them.\n" +
        "6. **Thicken the sauce**: Dissolve cornstarch in water, add to the pan, and stir until thickened.\n" +
        "7. **Garnish & serve**: Top with chopped green onions and serve with steamed rice.",
      image_url: "mapo_tofu.jpg",
      cuisine_id: 4,
    },
    {
      id: 18,
      recipe_name: "Hong Kong Borscht Soup",
      description:
        "A tomato-based beef soup influenced by Russian cuisine, popular in Hong Kong.",
      difficulty_level: "Medium",
      prep_time: 15,
      cook_time: 90,
      servings: 4,
      instructions:
        "1. **Prepare the ingredients**: Cut beef brisket into chunks, dice carrots, potatoes, and celery.\n" +
        "2. **Sear the beef**: In a large pot, heat oil and sear beef pieces until browned.\n" +
        "3. **Add vegetables**: Stir in onions, carrots, celery, and potatoes. Cook for 5 minutes.\n" +
        "4. **Simmer the soup**: Pour in beef broth and tomato paste, and add bay leaves. Simmer for 1.5 hours.\n" +
        "5. **Season to taste**: Add salt, black pepper, Worcestershire sauce, and vinegar for a balanced flavor.\n" +
        "6. **Serve hot** with a side of bread or rice.",
      image_url: "hong_kong_borscht.jpg",
      cuisine_id: 4,
    },
    {
      id: 19,
      recipe_name: "Kung Pao Chicken",
      description:
        "A Sichuan dish featuring stir-fried chicken, peanuts, and chili peppers.",
      difficulty_level: "Medium",
      prep_time: 15,
      cook_time: 15,
      servings: 3,
      instructions:
        "1. **Marinate the chicken**: Cut chicken into small pieces and mix with soy sauce, cornstarch, and rice vinegar.\n" +
        "2. **Prepare the sauce**: In a bowl, combine soy sauce, hoisin sauce, sugar, and cornstarch with water.\n" +
        "3. **Stir-fry the chicken**: Heat oil in a wok and stir-fry marinated chicken until browned. Remove and set aside.\n" +
        "4. **Sauté the aromatics**: In the same pan, cook dried red chilies, garlic, and ginger until fragrant.\n" +
        "5. **Add sauce and peanuts**: Pour in the prepared sauce, add back the chicken, and toss in roasted peanuts.\n" +
        "6. **Garnish & serve**: Sprinkle with green onions and serve with rice.",
      image_url: "kung_pao_chicken.jpg",
      cuisine_id: 4,
    },
    {
      id: 20,
      recipe_name: "Dan Dan Noodles",
      description:
        "A Sichuan noodle dish with a spicy, savory sauce and ground pork topping.",
      difficulty_level: "Hard",
      prep_time: 15,
      cook_time: 25,
      servings: 2,
      instructions:
        "1. **Cook the noodles**: Boil wheat noodles in salted water until tender. Drain and set aside.\n" +
        "2. **Prepare the sauce**: In a bowl, mix soy sauce, vinegar, sesame paste, chili oil, and Sichuan peppercorns.\n" +
        "3. **Cook the pork**: Heat oil in a pan and stir-fry ground pork with garlic, ginger, and chili bean paste until crispy.\n" +
        "4. **Assemble the dish**: Divide noodles into bowls and pour the sauce over them.\n" +
        "5. **Add toppings**: Spoon cooked pork over the noodles and top with chopped peanuts and green onions.\n" +
        "6. **Mix well & serve**.",
      image_url: "dan_dan_noodles.jpg",
      cuisine_id: 4,
    },
    {
      id: 21,
      recipe_name: "Soft Tofu Stew with Seafood (Sundubu Jjigae)",
      description:
        "A spicy Korean stew with soft tofu, seafood, and a rich broth.",
      difficulty_level: "Medium",
      prep_time: 15,
      cook_time: 20,
      servings: 2,
      instructions:
        "1. **Prepare the broth**: In a pot, bring water to a boil and add dried anchovies and kelp. Simmer for 15 minutes, then strain.\n" +
        "2. **Cook the aromatics**: Heat oil in a pot, add garlic and gochugaru (Korean red pepper flakes), and sauté for 30 seconds.\n" +
        "3. **Add seafood and tofu**: Pour in the broth, add seafood (shrimp, mussels, squid) and soft tofu, breaking the tofu into large chunks.\n" +
        "4. **Season the stew**: Stir in soy sauce, fish sauce, and salt to taste. Let simmer for 5 minutes.\n" +
        "5. **Finish with an egg**: Crack an egg on top and let it poach gently in the broth.\n" +
        "6. **Serve hot** with steamed rice and garnish with chopped green onions.",
      image_url: "soft_tofu_stew.jpg",
      cuisine_id: 5,
    },
    {
      id: 22,
      recipe_name: "Kimchi Stew (Kimchi Jjigae)",
      description:
        "A classic Korean stew made with aged kimchi, pork, and tofu.",
      difficulty_level: "Medium",
      prep_time: 10,
      cook_time: 30,
      servings: 3,
      instructions:
        "1. **Sauté the pork**: In a pot, cook pork belly over medium heat until lightly browned.\n" +
        "2. **Add kimchi**: Stir in chopped aged kimchi and sauté for 3-4 minutes.\n" +
        "3. **Pour in the broth**: Add water or anchovy broth and bring to a boil.\n" +
        "4. **Season the stew**: Stir in gochugaru, soy sauce, and sugar. Simmer for 20 minutes.\n" +
        "5. **Add tofu**: Slice tofu into thick pieces and gently add to the stew. Let simmer for another 5 minutes.\n" +
        "6. **Serve hot** with steamed rice and garnish with green onions.",
      image_url: "kimchi_stew.jpg",
      cuisine_id: 5,
    },
    {
      id: 23,
      recipe_name: "Jjajangmyeon",
      description:
        "Korean-Chinese black bean noodles with a rich, savory sauce.",
      difficulty_level: "Medium",
      prep_time: 15,
      cook_time: 25,
      servings: 2,
      instructions:
        "1. **Cook the noodles**: Boil fresh wheat noodles until tender. Drain and set aside.\n" +
        "2. **Prepare the vegetables**: Dice onions, potatoes, zucchini, and pork belly.\n" +
        "3. **Make the sauce**: Heat oil in a pan, add black bean paste (chunjang), and stir-fry for 1-2 minutes.\n" +
        "4. **Cook the pork**: Add pork belly and cook until browned. Then, add vegetables and stir-fry for 5 minutes.\n" +
        "5. **Simmer the sauce**: Pour in water or broth, add sugar, and let simmer for 10 minutes.\n" +
        "6. **Thicken the sauce**: Stir in cornstarch slurry and mix until thickened.\n" +
        "7. **Serve over noodles** and garnish with julienned cucumber.",
      image_url: "jjajangmyeon.jpg",
      cuisine_id: 5,
    },
    {
      id: 24,
      recipe_name: "Bibimbap",
      description:
        "A colorful Korean rice bowl with assorted vegetables, beef, and a fried egg.",
      difficulty_level: "Medium",
      prep_time: 20,
      cook_time: 20,
      servings: 2,
      instructions:
        "1. **Prepare the vegetables**: Julienne carrots, blanch spinach, and sauté shiitake mushrooms.\n" +
        "2. **Cook the beef**: Stir-fry ground beef with soy sauce, garlic, sugar, and sesame oil until browned.\n" +
        "3. **Make the gochujang sauce**: Mix gochujang, sesame oil, vinegar, sugar, and garlic in a bowl.\n" +
        "4. **Assemble the bowl**: Place steamed rice in a bowl and arrange vegetables and beef on top.\n" +
        "5. **Fry an egg**: Cook a sunny-side-up egg and place it in the center of the bowl.\n" +
        "6. **Drizzle with sauce** and mix everything together before eating.",
      image_url: "bibimbap.jpg",
      cuisine_id: 5,
    },
    {
      id: 25,
      recipe_name: "Japchae",
      description:
        "A Korean dish made with stir-fried glass noodles, beef, and vegetables.",
      difficulty_level: "Medium",
      prep_time: 15,
      cook_time: 20,
      servings: 3,
      instructions:
        "1. **Cook the noodles**: Boil sweet potato starch noodles (dangmyeon) until soft, then drain and rinse with cold water.\n" +
        "2. **Prepare the vegetables**: Julienne carrots, bell peppers, and onions. Blanch spinach and drain well.\n" +
        "3. **Cook the beef**: Stir-fry thinly sliced beef with soy sauce, garlic, and sugar until browned.\n" +
        "4. **Stir-fry the vegetables**: In a pan, heat oil and cook carrots, onions, and bell peppers for 3 minutes.\n" +
        "5. **Combine everything**: In a large bowl, toss the noodles with vegetables, beef, and sesame oil.\n" +
        "6. **Season & serve**: Add soy sauce, sesame seeds, and black pepper. Serve warm or at room temperature.",
      image_url: "japchae.jpg",
      cuisine_id: 5,
    },
    {
      id: 26,
      recipe_name: "Katsu Curry",
      description:
        "A Japanese dish featuring crispy breaded pork cutlet served with curry sauce and rice.",
      difficulty_level: "Medium",
      prep_time: 20,
      cook_time: 30,
      servings: 2,
      instructions:
        "1. **Prepare the pork cutlet**: Season pork cutlets with salt and black pepper.\n" +
        "2. **Bread the cutlet**: Coat each cutlet in flour, dip in beaten egg, and cover with panko breadcrumbs.\n" +
        "3. **Fry the cutlet**: Heat oil in a pan and fry the cutlets for 3-4 minutes per side until golden brown. Drain excess oil on paper towels.\n" +
        "4. **Make the curry**: In a pot, sauté diced onions, carrots, and potatoes until soft. Add Japanese curry roux and water, then simmer for 15 minutes.\n" +
        "5. **Assemble the dish**: Slice the pork cutlet and serve over steamed rice with curry sauce poured on top.\n" +
        "6. **Garnish and serve** with pickled radish or fukujinzuke (Japanese pickles).",
      image_url: "katsu_curry.jpg",
      cuisine_id: 6,
    },
    {
      id: 27,
      recipe_name: "Miso Ramen",
      description:
        "A comforting bowl of miso-flavored ramen with rich broth, noodles, and toppings.",
      difficulty_level: "Hard",
      prep_time: 20,
      cook_time: 45,
      servings: 2,
      instructions:
        "1. **Prepare the broth**: In a pot, heat sesame oil and sauté garlic and ginger. Add chicken broth and bring to a simmer.\n" +
        "2. **Add miso paste**: Stir in miso paste, soy sauce, and a pinch of sugar for balance.\n" +
        "3. **Cook the ramen noodles**: Boil ramen noodles in a separate pot according to package instructions. Drain and set aside.\n" +
        "4. **Prepare toppings**: Slice green onions, soft-boil an egg, and prepare corn, bean sprouts, and chashu pork (if using).\n" +
        "5. **Assemble the ramen bowl**: Divide noodles into bowls, pour hot broth over them, and add toppings.\n" +
        "6. **Garnish & serve** with a drizzle of chili oil and sesame seeds.",
      image_url: "miso_ramen.jpg",
      cuisine_id: 6,
    },
    {
      id: 28,
      recipe_name: "Salmon Avocado Roll",
      description:
        "A simple yet delicious sushi roll with fresh salmon, avocado, and seasoned rice.",
      difficulty_level: "Medium",
      prep_time: 20,
      cook_time: 10,
      servings: 2,
      instructions:
        "1. **Prepare the sushi rice**: Cook Japanese short-grain rice and season with rice vinegar, sugar, and salt. Let cool.\n" +
        "2. **Slice the ingredients**: Cut salmon into thin strips and slice avocado.\n" +
        "3. **Assemble the roll**: Place a sheet of nori (seaweed) on a bamboo sushi mat, spread a thin layer of rice on top, and arrange salmon and avocado along the edge.\n" +
        "4. **Roll the sushi**: Using the bamboo mat, tightly roll the sushi into a cylinder and seal with water.\n" +
        "5. **Slice and serve**: Cut the roll into bite-sized pieces and serve with soy sauce, wasabi, and pickled ginger.",
      image_url: "salmon_avocado_roll.jpg",
      cuisine_id: 6,
    },
    {
      id: 29,
      recipe_name: "Okonomiyaki",
      description:
        "A Japanese savory pancake filled with cabbage, meat, and topped with special sauces.",
      difficulty_level: "Medium",
      prep_time: 15,
      cook_time: 20,
      servings: 2,
      instructions:
        "1. **Prepare the batter**: In a bowl, mix flour, dashi stock, eggs, and shredded cabbage.\n" +
        "2. **Add toppings**: Stir in chopped green onions and choice of protein (pork belly, shrimp, or squid).\n" +
        "3. **Cook the pancake**: Heat oil in a pan and pour the batter into a round shape. Cook for 3-4 minutes per side until golden brown.\n" +
        "4. **Add toppings**: Drizzle with okonomiyaki sauce and Japanese mayonnaise. Sprinkle with bonito flakes and nori powder.\n" +
        "5. **Serve hot** and enjoy!",
      image_url: "okonomiyaki.jpg",
      cuisine_id: 6,
    },
    {
      id: 30,
      recipe_name: "Oyakodon",
      description:
        "A comforting Japanese rice bowl with simmered chicken, egg, and sweet soy sauce.",
      difficulty_level: "Easy",
      prep_time: 10,
      cook_time: 15,
      servings: 2,
      instructions:
        "1. **Prepare the sauce**: In a pan, combine dashi stock, soy sauce, mirin, and sugar. Bring to a simmer.\n" +
        "2. **Cook the chicken**: Add sliced chicken thigh and simmer until fully cooked.\n" +
        "3. **Add the egg**: Lightly beat eggs and pour over the chicken. Cover the pan and let the egg gently cook for 1-2 minutes.\n" +
        "4. **Prepare the rice**: Scoop steamed rice into serving bowls.\n" +
        "5. **Assemble the dish**: Pour the chicken and egg mixture over the rice.\n" +
        "6. **Garnish & serve** with chopped green onions and a sprinkle of nori.",
      image_url: "oyakodon.jpg",
      cuisine_id: 6,
    },
  ]);
}

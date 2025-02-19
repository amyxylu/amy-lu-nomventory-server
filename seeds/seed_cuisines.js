/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("cuisines").del();
  await knex("cuisines").insert([
    { id: 1, cuisine_name: "Italian", image_url: "/images/italian_mascot.jpg" },
    {
      id: 2,
      cuisine_name: "American",
      image_url: "/images/american_mascot.jpg",
    },
    {
      id: 3,
      cuisine_name: "Mexican",
      image_url: "/images/mexican_mascot_flag.jpg",
    },
    { id: 4, cuisine_name: "Chinese", image_url: "/images/chinese_mascot.jpg" },
    { id: 5, cuisine_name: "Korean", image_url: "/images/korean_mascot.jpg" },
    {
      id: 6,
      cuisine_name: "Japanese",
      image_url: "/images/japanese_mascot.jpg",
    },
  ]);
}

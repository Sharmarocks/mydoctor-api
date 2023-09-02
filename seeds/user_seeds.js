/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    {
      id: 1,
      firstname: "Rahul",
      lastname: "Sharma",
      email: "rahulsharma199724@gmail.com",
      phone: "888-111-2222",
      password: "123",
    },
  ]);
};

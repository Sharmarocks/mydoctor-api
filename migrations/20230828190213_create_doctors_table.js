/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("doctors", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("specialization").notNullable();
    table.VARCHAR("address", 255).notNullable();
    table.decimal("rating").notNullable();

    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("doctors");
};

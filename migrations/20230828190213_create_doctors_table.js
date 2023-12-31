/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("doctors", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("specialization").notNullable();
    table.string("address", 255).notNullable();
    table.decimal("rating").notNullable();
    table.text("bio").notNullable();
    table.text("image");

    table.timestamp("created_at").defaultTo(knex.fn.now());
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

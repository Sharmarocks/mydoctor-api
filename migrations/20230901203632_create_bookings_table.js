/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("bookings", (table) => {
    table.increments("booking_id").primary();
    table.integer("user_id").unsigned().references("id").inTable("users");
    table.string("user_name");
    table.string("user_email");
    table.integer("doctor_id").unsigned().references("id").inTable("doctors");
    table.string("doctor_name");
    table.dateTime("booking_datetime");

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
  return knex.schema.dropTable("bookings");
};

exports.up = function (knex) {
  return knex.schema.createTable("stages", function (table) {
    table.increments("id").primary();
    table.integer("mission_id").unsigned().notNullable();
    table
      .foreign("mission_id")
      .references("id")
      .inTable("missions")
      .onDelete("CASCADE");
    table.integer("order_index").unsigned().notNullable();
    table
      .enu("type", [
        "Maneuver",
        "Deployment",
        "Launch",
        "CorrectionBurn",
        "Burn",
        "Aerobrake",
        "Spacewalk",
        "Other",
      ])
      .notNullable();
    table
      .enu("status", ["Planned", "In Progress", "Completed", "Failed"])
      .defaultTo("Planned");
    table.text("description").nullable();
    table.text("data").nullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("stages");
};

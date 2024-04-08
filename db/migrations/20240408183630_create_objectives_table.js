exports.up = function (knex) {
  return knex.schema.createTable("objectives", function (table) {
    table.increments("id").primary();
    table.integer("mission_id").unsigned().notNullable();
    table
      .foreign("mission_id")
      .references("id")
      .inTable("missions")
      .onDelete("CASCADE");
    table.string("description").nullable();
    table
      .enu("type", [
        "Altitude",
        "Flyby",
        "OrbitDuration",
        "PowerGeneration",
        "Speed",
        "CrewRequirement",
        "Other",
      ])
      .notNullable();
    table.text("data").nullable();
    table
      .enu("status", ["Planned", "In Progress", "Completed", "Failed"])
      .defaultTo("Planned");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("objectives");
};

exports.up = function(knex) {
  return knex.schema.createTable('missions', function(table) {
    table.increments('id').primary();
    table.string('name', 255);
    table.text('description').nullable();
    table.integer('budget').nullable();
    table.enu('status', ['planned', 'in_progress', 'completed', 'on_hold', 'failed', 'cancelled']).defaultTo('planned');
    table.enu('priority', ['high', 'normal', 'low']).defaultTo('normal');
    table.integer('type_id').unsigned();
    table.foreign('type_id').references('id').inTable('mission_types').onDelete('CASCADE');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('missions');
};

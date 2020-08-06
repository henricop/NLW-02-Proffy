import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('connections', table => {
    table.increments('id').primary();

    // relacionamento entre tabelas
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onDelete('CASCADE');

      table.timestamp('created_at')
        .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
        .notNullable();

  });

}

export async function down(knex: Knex) {
  return knex.schema.dropTable('connections');
}
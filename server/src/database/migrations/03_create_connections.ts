import Knex from 'knex'

export async function up(knex: Knex) {
  //Quais alterações a gente quer realizar no banco dados
  return knex.schema.createTable('connections', table => {
    table.increments('id').primary();

    table.integer('user_id')
    .notNullable()
    .references('id')
    .inTable('users')
    .onUpdate('CASCADE')  //deleta todas as aulas junto com o professor
    .onDelete('CASCADE');

    table.timestamp('created_at')
    .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
    .notNullable();
  })
}

export async function down(knex: Knex) {
  //Deu merda no up -> Desfazer alterações
  return knex.schema.dropTable('connections')
}
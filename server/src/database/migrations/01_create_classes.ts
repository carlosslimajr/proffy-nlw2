import Knex from 'knex'

export async function up(knex: Knex) {
  //Quais alterações a gente quer realizar no banco dados
  return knex.schema.createTable('classes', table => {
    table.increments('id').primary();
    table.string('subject').notNullable();
    table.decimal('cost').notNullable();
    
    table.integer('user_id')
    .notNullable()
    .references('id')
    .inTable('users')
    .onUpdate('CASCADE')  //deleta todas as aulas junto com o professor
    .onDelete('CASCADE')
  })
}

export async function down(knex: Knex) {
  //Deu merda no up -> Desfazer alterações
  return knex.schema.dropTable('classes')
}
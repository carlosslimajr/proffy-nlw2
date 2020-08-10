import Knex from 'knex'

export async function up(knex: Knex) {
  //Quais alterações a gente quer realizar no banco dados
  return knex.schema.createTable('class_schedule', table => {
    table.increments('id').primary();

    table.integer('week_day').notNullable();
    table.integer('from').notNullable();//horario
    table.integer('to').notNullable();//horario
    
    table.integer('class_id')
    .notNullable()
    .references('id')
    .inTable('classes')
    .onUpdate('CASCADE')  //deleta todas as aulas junto com o professor
    .onDelete('CASCADE')
  })
}

export async function down(knex: Knex) {
  //Deu merda no up -> Desfazer alterações
  return knex.schema.dropTable('class_schedule')
}
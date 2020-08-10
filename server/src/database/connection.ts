import knex from 'knex';
import path from 'path'; //usado para encaminhar

//migrations - controlam a versão do banco de dados !

const db = knex({
  client: 'sqlite3',
  connection:{
    filename:path.resolve(__dirname,'database.sqlite'),//criando o database aqui dentro
  },
  useNullAsDefault: true, //Use null quando não saber o conteudo padrão
});

export default db;
import express from 'express'
import routes from './routes';
import cors from 'cors'


const app = express();
app.use(cors())
app.use(express.json()); //fazer o express ler json
app.use(routes)



//SELECT * FROM, USERS
//KNEX('users').select('*')


app.listen(3333);
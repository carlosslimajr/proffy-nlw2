import {Request,Response} from 'express'

import db from "../database/connection";
import convertHourToMinutes from "../utils/converHoutToMinutes";

interface ScheduleItem {
  week_day:number;
  from:string;
  to:string;
}

export default class ClassesController {

  async index(request:Request,response:Response){
    const filters = request.query;

    const subject = filters.subject as string
    const week_day = filters.week_day as string
    const time = filters.time as string


    if(!filters.week_day || !filters.subject || !filters.time){
      return response.status(400).json({
        error:'Missing filters to search classes'
      })
    }


    const timeInMinutes = convertHourToMinutes(time);
    const classes = await db('classes')
    .whereExists(function(){//filtrando tudo
      this.select('class_schedule.*')
      .from('class_schedule')
      .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
      .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
      .whereRaw('`class_schedule`.`from` <= ?? ', [timeInMinutes])
      .whereRaw('`class_schedule`.`to` > ?? ', [timeInMinutes])
    })
    .where('classes.subject', '=' ,subject)
    .join('users','classes.user_id','=','users.id')
    .select(['classes.*', 'users.*'])

    console.log(timeInMinutes)
    return response.json(classes)

  }


  async create(request: Request, response:Response){
    //desestruturando
    const { name, avatar, whatsapp, bio, subject, cost, schedule } = request.body;
  
    const trx = await db.transaction();
  
    try{
  
    //Promises !
    const insertedUsersIds = await trx('users').insert({
      name,
      avatar,
      whatsapp,
      bio,
    }) //Aqui cria o usuario
    //aqui cria automaticamento um id
    const user_id = insertedUsersIds[0] //pegando o id que acabou de ser inserindo
  
    const insertedClassesIds = await trx('classes').insert({
      subject,
      cost,
      user_id //id do usuario
    })
  
    const class_id = insertedClassesIds[0] //pegando id da aula
    //percorrendo todos os schedules com o map
    const classSchedule = schedule.map((scheduleItem:ScheduleItem)=>{ 
      return {
        class_id,
        week_day: scheduleItem.week_day,
        from: convertHourToMinutes(scheduleItem.from),
        to: convertHourToMinutes(scheduleItem.to)
      }
    })
  
    await trx('class_schedule').insert(classSchedule)
    await trx.commit(); // só aqui que ele insere tudo!
  
    return response.status(201).send() //201 == CRIADO COM SUCESSO
  
    } catch(err){
      console.log(err)
      await trx.rollback(); //Desfazendo tudo no banco
  
      return response.status(400).json({
        error:'Unexpected error while creating new class'
      })    
    }
  }
}
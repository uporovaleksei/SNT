import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class NewsController {

public async index(ctx:HttpContextContract){
  return Database.from('news').select('*')
}
public async createNews(ctx:HttpContextContract){
  return Database.from('news').select('*')
}

}

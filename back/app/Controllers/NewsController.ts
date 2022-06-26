import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class NewsController {
  private tb = 'news'

  public async index(){
    return await Database.from(this.tb).select("*")
  }

  public async create({ request }: HttpContextContract) {
    await Database.table(this.tb).insert(request.body())
  }
}

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class NewsController {
  private tb = 'news'

  public async index({ params }: HttpContextContract){
    let query = `SELECT * FROM ${this.tb} ORDER BY date DESC`
    const {limit} = params
    if(limit)
      query+= ' LIMIT ' + limit
    return (await Database.rawQuery(query)).rows
  }

  public async create({ request }: HttpContextContract) {
    await Database.table(this.tb).insert(request.body())
  }
}

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class NewsController {
  private tb = 'docs'

  public async index(){
    const items = (await Database.rawQuery(`SELECT * FROM ${this.tb}`)).rows
    return items
  }

  public async create({ request }: HttpContextContract) {
    await Database.table(this.tb).insert(request.body())
  }
  public async delete({params}: HttpContextContract){
    let query = `DELETE FROM ${this.tb} WHERE id=${params.id}`
    return (await Database.rawQuery(query)).rows
  }
}
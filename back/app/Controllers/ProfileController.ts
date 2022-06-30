import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class NewsController {
  private tb = 'users'
  public async update({ request }: HttpContextContract) {
    const {id,phone,name} = request.body()
    let query = `UPDATE ${this.tb} SET phone = '${phone}',name = '${name}' WHERE id= ${id}`
    return (await Database.rawQuery(query)).rows
  }
}

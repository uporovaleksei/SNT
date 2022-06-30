import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class NewsController {
  private tb = 'users'
  public async update({ params,request }: HttpContextContract) {
    const {id,phone,name,login} = request.body()
    let query = `UPDATE ${this.tb} SET phone = '${phone}',name = '${name}',login = '${login}' WHERE id= ${id}`
    return (await Database.rawQuery(query)).rows
  }
}

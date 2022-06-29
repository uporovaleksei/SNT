import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class NewsController {
  private tb = 'comments'

  public async index({ params }: HttpContextContract){
    const items = (await Database.rawQuery(`SELECT * FROM ${this.tb} WHERE news = ${params.id} ORDER BY date DESC`)).rows
    return await Promise.all(items.map(async e => ({
      ...e,
      username: (await Database.from("users").where("id", e.user).first()).name
    })))
  }

  public async create({ request, session, params }: HttpContextContract) {
    const {text} = request.body()
    const date = new Date().getTime()
    const {id: user} = session.get('user')
    await Database.table(this.tb).insert({
      news: params.id,
      text, date, user
    })
  }
}

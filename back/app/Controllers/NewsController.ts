import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class NewsController {
private tb = 'news'

public async createNews({ request }: HttpContextContract) {
  const { title, image, text } = request.body()
  const news = {
    title,
    image,
    text
  }
  await Database.table(this.tb).insert(news)
  return news
}
}

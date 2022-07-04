import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class NewsController {
  private tb = 'government'

  public async index({ params }: HttpContextContract){
    let query = `SELECT * FROM ${this.tb}`
    const {limit} = params
    if(limit)
      query+= ' LIMIT ' + limit
    return (await Database.rawQuery(query)).rows
    
  }

  public async update({request }: HttpContextContract) {
    let query
    const {id,image,name,status,phone,email} = request.body()
    if(image == null){
      query = `UPDATE ${this.tb} SET name = '${name}', status = '${status}', phone = '${phone}', email = '${email}' WHERE id= ${id}`
    }
    else{
      query = `UPDATE ${this.tb} SET image = '${image}', name = '${name}', status = '${status}', phone = '${phone}', email = '${email}' WHERE id= ${id}`
    }
    return (await Database.rawQuery(query)).rows
  }

  public async create({ request }: HttpContextContract) {
    await Database.table(this.tb).insert(request.body())
  }
  public async delete({params}: HttpContextContract){
    let query = `DELETE FROM ${this.tb} WHERE id=${params.id}`
    return (await Database.rawQuery(query)).rows
  }
}

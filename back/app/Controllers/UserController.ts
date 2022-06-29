import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class UserController {
  private SECRET = 'SNT'
  private tb = 'users'

  private hash(login, password) {
    return login + this.SECRET + password
  }

  public async user({ session }) {
    return session.get('user')
  }

  public async login({ request, session }: HttpContextContract) {
    const { login, password } = request.body()
    const hash = this.hash(login, password)
    const user = await Database.from(this.tb).where('hash', hash).first()
    if (!user) return { error: 'Неверные данные' }
    session.put('user', await Database.from(this.tb).where('login', login).first())
    return user
  }

  public async logout({ session }: HttpContextContract) {
    session.forget('user')
  }

  public async reg({ request, session }: HttpContextContract) {
    const { login, password, name, phone } = request.body()
    const is_exist = await Database.from(this.tb).where('login', login).first()
    if (is_exist) return { error: 'Пользователь с таким логином уже существует' }
    const hash = this.hash(login, password)
    const user = {
      login,
      hash,
      name,
      phone,
      is_admin: false,
    }
    await Database.table(this.tb).insert(user)
    session.put('user', await Database.from(this.tb).where('login', login).first())
    return user
  }
}

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

// Проверка авторизации
export default class AuthMiddleware {
  public async handle(
    { session, response, logger}: HttpContextContract,
    next: () => Promise<void>
  ) {
    const user = session.get("user")
    if(!user){
      logger.warn("Не авторизован")
      return response.status(403)
    }
    next()
  }
}

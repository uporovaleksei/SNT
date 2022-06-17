import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Logos extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('login')
      table.boolean('is_admin')
      table.string('hash')
      table.string('name')
      table.string('phone')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}

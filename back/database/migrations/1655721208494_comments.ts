import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'comments'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer("news")
      table.integer('user')
      table.bigInteger('date')
      table.text('text')
    })
  }
  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

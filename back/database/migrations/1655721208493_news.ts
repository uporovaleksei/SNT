import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'news'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title')
      table.bigInteger('date')
      table.text('image')
      table.text('text')
    })
  }
  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

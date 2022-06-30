import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'contacts'
  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title')
      table.text('text')
      table.text('image')
    })
  }
  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

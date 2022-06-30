import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'government'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.string('status')
      table.string('phone')
      table.string('email')
      table.text('image')
    })
  }
  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

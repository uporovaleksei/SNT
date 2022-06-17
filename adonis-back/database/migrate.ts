import Application from '@ioc:Adonis/Core/Application'
import Database from '@ioc:Adonis/Lucid/Database'
import Migrator from '@ioc:Adonis/Lucid/Migrator'

export default async () => {
  const migrator = new Migrator(Database, Application, { direction: 'up', dryRun: false })
  await migrator.run()
  console.log(migrator.migratedFiles)
}

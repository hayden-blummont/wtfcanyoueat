exports.up = (knex, Promise) => {
  return knex.schema.createTable('establishments', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('address')
    table.string('website')
    table.string('type')
    table.string('phoneNumber')
    table.string('recommended')
    table.float('lat')
    table.float('lng')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('establishments')
}

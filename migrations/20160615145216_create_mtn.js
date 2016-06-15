
exports.up = function(knex, Promise) {
  return knex.schema.createTable("mtn", function (table){
    table.increments()
    table.string("name")
    table.integer("elevation")
    table.integer("distance")
    table.integer("rating")
    table.text("review")
    table.text("image_url")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("mtn")
};

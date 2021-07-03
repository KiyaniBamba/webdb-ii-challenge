
exports.up = function(knex) {
  return knex.schema.createTable('cars', table => {
      // primary key, auto incrementing, not null etc
        table.increments();

        // create a "name" column, unique, not-nullable, text, 128
        table.text('VIN', 128).unique().notNullable();
        table.text('make').notNullable();
        table.text('model').notNullable();
        table.text('mileage').notNullable();
        table.text('transmissionType');
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};



// The critical information for each car is the VIN, make, model, and mileage.
// - They also track transmission type and status of the title (clean, salvage, etc.), but this information is not always immediately known.

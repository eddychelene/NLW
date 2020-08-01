import Knex from 'knex';

export async function up (knex: Knex) {
    return knex.schema.createTable('points', table => {
        table.increments('id').primary();
        table.string('image').notNullable(); 
        table.string('name').notNullable(); 
        table.string('email').notNullable(); 
        table.string('whatsapp').notNullable(); 
        table.decimal('latitude').notNullable();
        table.decimal('longetude').notNullable(); 
        table.string('city').notNullable(); 
        table.integer('capacity',2).notNullable(); 
    })
}

export async function down (knex: Knex) {
    //voltar atras.. faz o contrario do up 
   return knex.schema.dropTable('points');
}
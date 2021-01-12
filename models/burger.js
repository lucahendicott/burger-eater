// Import the ORM to create functions that will interact with the database.
const orm = require('../config/orm.js');

const burger = {
    selectAll(cb) {
    orm.all('burgers', (res) => cb(res));
    },
    insertOne(vals, cb) {
    orm.create('burgers', vals, (res) => cb(res));
    },
    updateOne(objColVals, condition, cb) {
    orm.update('burgers', objColVals, condition, (res) => cb(res));
    },
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
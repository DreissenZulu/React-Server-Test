// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var model = {
    selectAll: resolve => {
        orm.selectData("testInfo", "createdAt, post", "", (res) => {
            resolve(res);
        });
    },
    insertOne: (vals, resolve) => {
        orm.insertData(vals, (res) => {
            resolve(res);
        });
    }
};

module.exports = model;
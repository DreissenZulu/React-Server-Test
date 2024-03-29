// Import MySQL connection.
const connection = require("./connection.js");

// Put functions that interact with the server directly here.
const orm = {
    selectData: async (tables, columns, condition, resolve) => {
        let queryString = `SELECT ${columns} FROM ${tables} ${condition};`;
        await connection.query(queryString, function (err, res) {
            if (err) throw err;
            resolve(res);
        });
    },
    insertData: async (vals, resolve) => {
        let queryString = `INSERT INTO testInfo (post) VALUES ("${vals}");`;
        await connection.query(queryString, function (err, res) {
            if (err) throw err;
            resolve(res);
        });
    }
}

module.exports = orm;
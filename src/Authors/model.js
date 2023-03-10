const { DataTypes } = require("sequelize");
const connection = require("../db/connection");

const Author = connection.define("Author", {
    authorName: {
        type: DataTypes.STRING,
    },
})

module.exports = Author;
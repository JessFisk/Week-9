const { DataTypes } = require("sequelize");
const Book = require("../books/model");
const connection = require("../db/connection");
const User = require("../users/model");

const Favourite = connection.define("Favourite", {
    username:{ 
        type: DataTypes.STRING,
        // references:{
        //     model: User,
        //     key: 'username'
        // }
    },
    title: {
        type: DataTypes.STRING,
        // references: {
        //     model: Book,
        //     key: 'title'
        // }
    },
})

module.exports = Favourite;



// {
//     "title": "The Twits",
//     "author": "Rohl Dahl",
//     "genre": "fantasy"
//   }

const {Router} = require("express");

const genreRouter = Router();

const {addGenre, getAllBooks} = require("./controllers");
const { tokenCheck } = require("../middleware")

genreRouter.post("/genres/addgenre", tokenCheck, addGenre);
genreRouter.get("/genres/getbooksbygenre/:genre", getAllBooks);


module.exports = genreRouter;
const { Router } = require("express");

const authorRouter = Router();

const { addAuthor, getAuthorAndBooks } = require("./controllers");
const { tokenCheck } = require("../middleware")

authorRouter.post("/authors/addauthor", tokenCheck, addAuthor);
authorRouter.get("/authors/getauthorandbooks/:author", getAuthorAndBooks);



module.exports = authorRouter;
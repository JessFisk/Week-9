const { Router } = require("express");
const bookRouter = Router();



const { addBook, getAllBooks, getSingleBookByTitle, deleteBook, updateBook } = require("./controllers");
const { tokenCheck } = require("../middleware")

bookRouter.post("/books/addbook", tokenCheck, addBook);
bookRouter.put("/books/updatebook", tokenCheck, updateBook);
bookRouter.delete("/books/deletebook", tokenCheck, deleteBook);
bookRouter.get("/books/getallbooks", getAllBooks);
bookRouter.get("/books/getbook/:title", getSingleBookByTitle);



module.exports = bookRouter;





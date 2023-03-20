const Book = require("./model")


const addBook = async (req, res) => {
    try {
        if (!req.authCheck) {
            const error = new Error("User is not authorised");
            res.status(401).json({ errorMessage: error.message, error: error });
        }
        const book = await Book.create(req.body);
        res.status(201).json({ message: "success", newBook: book });
    }
    catch (error) {
        res.status(501).json({ errorMessage: error.message, error: error });
    }
}






const getAllBooks = async (req, res) => {
    try {
        const allBooks = await Book.findAll();
        res.status(200).json({ message: "success", books: allBooks });
    }
    catch (error) {
        res.status(501).json({ errorMessage: error.message, error: error });
    }
}







const getSingleBookByTitle = async (req, res) => {
    try {
        const getSingleBook = await Book.findOne({ where: { title: req.params.title } });
        res.status(200).json({ message: "success", book: getSingleBook });
    }
    catch (error) {
        res.status(501).json({ errorMessage: error.message, error: error });
    }
}






const deleteBook = async (req, res) => {
    try {
        if (!req.authCheck) {
            const error = new Error("User is not authorised");
            res.status(401).json({ errorMessage: error.message, error: error });
        }
        const deleteBook = await Book.destroy({ where: { title: req.body.title } });
        res.status(201).json({ message: "successfully deleted", result: deleteBook });
    }
    catch (error) {
        res.status(501).json({ errorMessage: error.message, error: error });
    }
}






const updateBook = async (req, res) => {
    try {
        if (!req.authCheck) {
            const error = new Error("User is not authorised");
            res.status(401).json({ errorMessage: error.message, error: error });
        }
        const updateBook = await Book.update({ [req.body.updateKey]: req.body.updateValue }, { where: { title: req.body.title } });
        res.status(201).json({ message: "success", book: updateBook });
    }
    catch (error) {
        res.status(501).json({ errorMessage: error.message, error: error });
    }
}



// {
//     "title": "BookTitle",
//     "updateKey": "ThingYouWantUpdating",
//     "updateValue": "x"
// }



module.exports = {
    addBook,
    getAllBooks,
    getSingleBookByTitle,
    deleteBook,
    updateBook,
}
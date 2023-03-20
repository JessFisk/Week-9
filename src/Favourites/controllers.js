const Favourite = require("./model")
const Book = require("../books/model");


const getUsersFavBooks = async (req, res) => {
    try {
        const favBooks = await Favourite.findAll({where: { user: req.params.user },
        include: Book,
    });
        res.status(200).json({ message: "success", books: favBooks });
    }
    catch (error) {
        res.status(501).json({ errorMessage: error.message, error: error });
    }
}




const addFavouriteList = async (req, res) => {
    try {
        if (!req.authCheck) {
            const error = new Error("User is not authorised");
            res.status(401).json({ errorMessage: error.message, error: error });
        }
        const favourite = await Favourite.create(req.body);
        res.status(201).json({ message: "success", favourite: favourite });
    }
    catch (error) {
        res.status(501).json({ errorMessage: error.message, error: error });
    }
}





module.exports = {
    getUsersFavBooks,
    addFavouriteList,
}
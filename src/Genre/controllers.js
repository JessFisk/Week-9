const Genre = require ("./model")
const Book = require("../books/model");

////////////////////////////////////////////////////////
const addGenre= async (req, res) => {
    try {
        if (!req.authCheck) {
            const error = new Error("User is not authorised");
            res.status(401).json({ errorMessage: error.message, error: error });
        }
        const genre = await Genre.create(req.body);
        res.status(201).json({message:"success", genre: genre});
    }
    catch (error){   
    res.status(501).json({errorMessage:error.message, error: error});
    }
}
////////////////////////////////////////////////////////
const getAllBooks = async (req, res) => {
    try{
        const genre = await Genre.findOne ({
            where: { genre:req.params.genre},
            include: Book,
        });
        res.status(200).json({message:"success", genre: genre});
    }
    catch(error){
    res.status(501).json({errorMessage: error.message, error: error});
        }
    }
////////////////////////////////////////////////////////
module.exports = {
    addGenre,
    getAllBooks,
}
const { Router } = require("express");
const favouriteRouter = Router();



const { getUsersFavBooks, addFavouriteList} = require("./controllers");
const { tokenCheck } = require("../middleware")


favouriteRouter.post("/favourites/addfavouritelist", tokenCheck, addFavouriteList);
favouriteRouter.get("/favourites/getusersfavbooks/:user", getUsersFavBooks);


module.exports = favouriteRouter;
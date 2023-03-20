const { Router } = require("express");
const userRouter = Router();


const { hashPass, comparePass, tokenCheck } = require("../middleware");
const { registerUser, login, getAllUsers, updateUserName } = require("./controllers");


userRouter.post("/users/register", hashPass, registerUser);
userRouter.post("/users/login", comparePass, login);

userRouter.put("/updateUserName", tokenCheck, updateUserName);
userRouter.get("/users/authcheck", tokenCheck, login);
userRouter.get("/users/getallusers", tokenCheck, getAllUsers)

module.exports = userRouter;


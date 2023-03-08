require("dotenv").config()
const express = require("express")

const port = process.env.PORT || 5001;


const User = require("./users/model");
const Book = require("./Books/model")

const userRouter = require("./users/routes");
const bookRouter = require("./Books/routes");

const app = express();

app.use(express.json());

const syncTables = () => {
    User.sync({ alter: true, force: false });
    Book.sync();
}

app.use(userRouter);
app.use(bookRouter);

app.get("/health", (req, res) =>
    res.status(200).json({ message: "API is working" }));

app.listen(port, () => {
    syncTables();
    console.log(`server is listening on port ${port}`);
})



/// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjc4Mjc5OTAyfQ.QZtXgt7MOy6MVK5tyerxRAijM-fEV5_yMOOCBIMnMzc
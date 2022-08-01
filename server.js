const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({path: "./.env"});
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.listen(port, ()=> {
    console.log(`Server is running on port: ${port}`);
});

// this is git test purpose

// dhiraj is trying git push and PR
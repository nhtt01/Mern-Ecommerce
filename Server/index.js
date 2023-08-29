const express = require("express");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const routes = require("./Src/Routes");
const bodyParser = require("body-parser");
dotenv.config();
const app = express();
const PORT = parseInt(process.env.PORT)  || 3001;


app.use(bodyParser.json());
routes(app);




console.log(process.env.MONGO_DB)
mongoose.connect(`${process.env.MONGO_DB }` )
.then(()=>{
    console.log("DB Connect Success !");
})
.catch((e)=>{
    console.log("DB Connect Errorr !: ",e);

})
app.listen(PORT,()=>{
console.log("Server is running: ",PORT)
})
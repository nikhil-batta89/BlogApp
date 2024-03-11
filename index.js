

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());

const blog = require("./routes/blog")
//mount
app.use("/api/v1", blog);

const connectWithDb = require("./config/database");
connectWithDb();

//start the server
app.listen(PORT, () => {
    console.log(`App is started at Port no ${PORT}`);
})

app.get("/", (req,res) => {
    res.send(`<h1>This is my homePage baby</h1>`)
})


// const express = require("express");
// const app = express();

// //load config from env file
// require("dotenv").config();
// const PORT = process.env.PORT || 4000;

// //middleware to parse json request body
// app.use(express.json());

// const blog = require("./routes/blog");
// //mount
// app.use("/api/v1", blog);

// const connectwithdb = require("./config/database");
// connectwithdb();
// // start with server
// app.listen(PORT,()=>{
//      console.log(`Server is running on port ${PORT}`);
// })

// app.get('/',(req,res)=>{
//     res.send(`<h1>This is a HomePage Baby</h1>`)
// })
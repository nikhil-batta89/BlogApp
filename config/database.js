const mongoose = require("mongoose");

require("dotenv").config();

const connectWithDb = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(console.log("DB Connected Successfully"))
    .catch( (error) => {
        console.log("DB Facing Connection Issues");
        console.log(error);
        process.exit(1);
    } ) 
};

module.exports = connectWithDb;




// const mongoose = require("mongoose");
// //.env config file ha os ko load kar deta ha process wale object ke under
// require("dotenv").config();
// const connectwithDb = () =>{
//     mongoose.connect(process.env.DATABASE_URL , {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     })
// .then(console.log("DB Connected Successfuly"))
// .catch((err)=>{
//     console.log("BD Facing Connection Issues");
//     console.log(err);
//     process.exit(1);//forrce exist if database connection fails 
// }) 
// }
// module.exports = connectwithDb;
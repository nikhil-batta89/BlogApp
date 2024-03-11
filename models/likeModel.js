//import mongoose
const mongoose = require("mongoose");


//route handler

const likeSchema = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post", //reference to the post model
    },
    user: {
        type: String,
        required:true,
    },
});

//export
module.exports = mongoose.model("Like", likeSchema);



// //import mongoose
// const mongoose = require("mongoose");
// // like ke under two types ha
// // 1. kis post pe comment keya 
// // 2. kis user ne comment keys ha
 
// //route handler
// const likeSchema = new mongoose.Schema({
//     // post ik id ko store kar raha hoga  type
//    // ref
//     post :{
//        type:  mongoose.Schema.Types.ObjectId,
//        ref: "Post", //reference to the post model
//    },
//    user :{
//     type:String,
//     required:true,
//    },
   
// });

// //exports

// module.exports = mongoose.model("Like", likeSchema);

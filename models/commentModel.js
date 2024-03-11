//import mongoose
const mongoose = require("mongoose");


//route handler
const commentSchema = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post", //reference to the post model
    },
    user: {
        type: String,
        required:true,
    },
    body: {
        type:String,
        required:true,
    }
});

//export
module.exports = mongoose.model("Comment", commentSchema);



// //import mongoose
// const mongoose = require("mongoose");
// // comment ke under three types ha
// // 1. kis post pe comment keya 
// // 2. kis user ne comment keys ha
// // 3. kiya comment keya 
// //route handler
// const commentSchema = new mongoose.Schema({
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
//    body:{
//     type:String,
//     required:true,
//    }
// });

// //exports

// module.exports = mongoose.model("Comment", commentSchema);

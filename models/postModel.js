//import mongoose
const mongoose = require("mongoose");


//route handler
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Like",
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
    }]
});




//export
module.exports = mongoose.model("Post", postSchema);




// //import mongoose
// const mongoose = require("mongoose");
// // like ke under two types ha
// // 1. kis post pe comment keya 
// // 2. kis user ne comment keys ha
 
// //route handler
// const postSchema = new mongoose.Schema({
//     // post ik id ko store kar raha hoga  type
//    // ref
//     title :{
//        type:  string,
//        required:true,
//    },
//    body :{
//     type:String,
//     required:true,
//    },
//    //like array to use  id 
//    like :[{
//        type:mongoose.Schema.Types.ObjectId,
//        ref:"Like",
//    }],
//    comment:[{
//       type:mongoose.Schema.Types.ObjectId,
//       ref:"Comment",
//    }]
// });
 
// //exports

// module.exports = mongoose.model("Post", postSchema);

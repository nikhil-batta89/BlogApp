//import model
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

//business logic 

exports.createComment = async (req, res) => {
    try{
        //fetch data from req body 
        const {post, user, body} = req.body;
        //create a comment object
        const comment = new Comment({
            post,user,body
        });

        //save the new comment into the database
        const savedComment = await comment.save();

        //find the post by ID, add the new commnet to its comments array
        const udpatedPost = await Post.findByIdAndUpdate(post, {$push: {comments: savedComment._id} }, {new: true}  )
                            .populate("comments") //populate the comments array with comment documents
                            .exec();
               //populate comment karta ho only ID show hoti ha
               //populte karta ho document show hota 
        res.json({
            post: udpatedPost,
        });

    }
    catch(error) {
        return res.status(500).json({
            error: "Error While Creating comment" ,
        });
    }
};




// //import model
// const Post = require("../models/postModel");
// const Comment = require("../models/commentModel");

// // Bussiness logic 
// // save function use kar na chata huI can ready a object comment insert karna chahatu phele comment ka object 
// // create kar leya ho
// exports.createComment = async (req,res)=>{
//     try{
//       //fetch data from body
//       const {post,user,body} = req.body;
//       //create a comment object
//       const comment = new Comment({
//         post,user,body
//       })
//       //save the new comment into thr database
//        const saveComment = await comment.save();
//     //push new entry ke laye update karte ha
//     // pull entry ko dele te ke leya use kar rahe ho
//        //find the post by ID, add the new comment to itscomment array update  
//     const updatePost = await Post.findByIdAndUpdate(post, {$push : {comment: saveComment._id}},{new:true})
//     .populate('comment')//populate the comments array with comment documents
//     .exec();
//     res.json({
//       post:updatePost,
//     })
//     // {new :true} means post return karega naya vali return karana or pura wali nahi karna
//     }
//     catch(err)
//     {
//         return res.status(500).json({
//           err:"Error while Creating comment",
//         })
//     }
// }


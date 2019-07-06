const Post=require('../models/post');
//module.exports.action_name= function(req,res){}
module.exports.home=function(req,res){
   // Post.find({},function(err,posts){
   //     if(err){
   //        console.log('error in finding the posts');
   //        return;
   //     }
   //     return res.render('home',{
   //        title:'home',
   //        posts:posts
   //     });
   // })
   //here user is the field in post schema 
   //we have populated the user field
   Post.find({}).populate('user').exec(function(err,posts){
        if(err){
           console.log('error in finding the posts');
           return;
        }
        return res.render('home',{
           title:'home',
           posts:posts
        });



   })
 
}

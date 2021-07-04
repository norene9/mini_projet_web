var express=require('express')
var router=express.Router()
var bodyparser=require('body-parser')
var bodyparseru=bodyparser.urlencoded({})
var mongoose=require('mongoose')
var SchemaMarque=mongoose.Schema({marques: String});
var SchemaMobile=mongoose.Schema({mobile: String,Description: String,prix:String,color:String
    marque: [{type:mongoose.Schema.Types.ObjectId,ref:"marque"}]});

marque.model("marque",SchemaMarque);
mobile.model("mobile",SchemaMobile);
router.get('/',async function(req,res,next){
    try{
      var mobile= await mobile.find()
      
      
      
      res.render('mobile',{mobile});
        

    }catch(err){
next(err)
    }
})
router.post('/addmobile', bodyparseru, function(req,res,next){
    try{
var m=req.body.mobilename;
var Description=req.body.Description;
var prix=req.body.prix;
var color=req.body.color;
var marque=req.body.marque;

var mob=new mobile({mobile:nom,Description:Description,prix:prix,color:color,marque:marque});
mob.save()
res.redirect('back')
    }catch(err){
        next(err)
    }
})
router.post('/addmarque', bodyparseru, function(req,res,next){
    try{

marques=req.body.marque;

var marque=new marque({marques:marques});
marque.save()
res.redirect('back')
    }catch(err){
        next(err)
    }
})
router.get('/delete/:id',bodyparseru,async function(req,res,next){
    try{
        var idmarque=req.params.id;
        var mobile=mobile.remove({marque:{idmarque}});
       await marque.findByIdAndRemove(req.params.id).then ( async function (marques){ 
           console.log(marques)
        res.redirect('back');});
        

    }catch(err){
next(err)
    }
})
router.get('/deletemobile/:id',bodyparseru,async function(req,res,next){
    try{
    
        
       await mobile.findByIdAndRemove(req.params.id).then ( async function (mobile){ 
           
        res.redirect('back');});
        

    }catch(err){
next(err)
    }
})
router.post('/editmobile',bodyparseru,async function(req,res,next){
    try{
        var id=req.body.id;
        var m=req.body.mobilename;
        var Description=req.body.Description;
        var prix=req.body.prix;
        var color=req.body.color;
        var marque=req.body.marque;
       await mobile.findById(id).then ( async function (mobile){ 
           
        mobile.Description=Description;
        mobile.prix=prix;
        mobile.color=color;
        mobile.marque=marque;
        mobile.save();
        res.redirect('/');});
        

    }catch(err){
next(err)
    }
})
router.post('/editmarque',bodyparseru,async function(req,res,next){
    try{
        var id=req.body.id;
       
        var marques=req.body.marque;
       await marque.findById(id).then ( async function (marques){ 
           
        
        marque.marques=marques;
        marque.save();
        res.redirect('/');});
        

    }catch(err){
next(err)
    }
})
router.post('/filterbymarque',bodyparseru,async function(req,res,next){
    try{
        var id=req.body.id;
       
        var marques=req.body.marque;
        var mobilef=mobile.aggregate([
            {
              $lookup:
                {
                  from: "marque",
                  localField: "marque",
                  foreignField: "marques",
                  as: "m"
                },$where:{marque:{marques}}
           }
         ])
         res.render('mobile',{mobilef});  

    }catch(err){
next(err)
    }
})
router.post('/filterbymarquecolor',bodyparseru,async function(req,res,next){
    try{
        var id=req.body.id;
       
        var marques=req.body.marque;
        var mobilef=mobile.aggregate([
            {
              $lookup:
                {
                  from: "marque",
                  localField: "marque",
                  foreignField: "marques",
                  as: "m"
                },$where:{marque:{marques}}
           }
         ])
         res.render('mobile',{mobilef});  

    }catch(err){
next(err)
    }
})
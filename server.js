import express from "express";
import mongoose from "mongoose";
import Data from "./data.js";
import TikTokVideoData from "./dbModels.js"
const connection_url="mongodb+srv://nishanprime:<password>@tiktok-databse-cluster.siew2.mongodb.net/TikTok_Database?retryWrites=true&w=majority"

mongoose.connect(connection_url,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true});



const app=express();
app.use(express.json())
app.use(express.urlencoded({extended:false}))
const port=9000 || process.env.PORT

app.get("/",(req,res)=>{
    console.log("Inside get route")
    console.log(req.body)
    res.status(200).send("Hello world")
})

// --------Mongoose Model------//



// const tiktokSchema=new mongoose.Schema(
//  {
//      url:String,
//      likes:Number,
//      comments:Number,
//      shares:Number,
//      username:String,
//      songName:String,
//      title:String
//  }

// );

// const VideoDatabse=mongoose.model("NewVideoDatabseForTiktok",tiktokSchema);

// const firstData=new VideoDatabse(
//     {
//         url:"https://www.datocms-assets.com/22581/1603987542-2-pexels.mp4",
//         likes:100,
//         comments:200,
//         shares:34,
//         username:"nishanprime",
//         songName:"Perfect | Ed Sheeran",
//         title:"This has to be my all time favorite song",
//     },
// )
// firstData.save()
//---End----------------------//

app.post("/v2/posts",(req,res)=>{
    console.log(" ---"+req.body+"---")
    res.send(req.body)
    // TikTokVideoData.create(dbVideos,(err,data)=>{
    //     if(err){
    //         res.status(500).send(err)
    //     }else{
    //         res.status(201).send(data)
    //     }
    // })
//     VideoDatabse.insertMany(Data,function(err){
// if(err){
//     console.log(err)
// }
// else{
//     console.log("all datas saved successfully")
// }
//     })

})
app.get("/v1/posts",(req,res)=>{
    console.log("Inside get route")
    console.log(req.body)
    res.send("Fetched data")
    // res.status(200).send(Data)
})
app.listen(port,()=>{
    console.log("Server started successfully ")
})  
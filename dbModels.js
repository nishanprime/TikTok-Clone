import mongoose from "mongoose";
const Schema=mongoose.Schema;
const tiktokSchema=new Schema(
 {
     url:String,
     likes:Number,
     comments:Number,
     shares:Number,
     username:String,
     songName:String,
     title:String
 }

);

export default mongoose.model("TikTokVideoData", tiktokSchema)
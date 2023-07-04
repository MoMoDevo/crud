import mongoose, {models,model} from "mongoose";
const {Schema}=mongoose
const postShema=new Schema({
    title:{
type:String,
unique:true

    },
    desc:{
        type:String
    }

},{timestamps:true})


const Post=models.Post || model("Post",postShema)
export default Post

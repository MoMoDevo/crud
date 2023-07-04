import mongoose, { model, models, mongo } from "mongoose";

const ceategoryShema=new mongoose.Schema({
    name:{
        ref:"Post",
        type: mongoose.Schema.Types.ObjectId,

    }
},{timestamps:true})

const Category=models.Category || model.Category("Category",ceategoryShema)
export default Category
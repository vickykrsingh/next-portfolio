import { Schema , model , models } from "mongoose";

const projectCategorySchema = new Schema ({
    
    name:{
        type:String,
        required:true
    }
},{timestamps:true})


const projectCategoryModel = models.project_category || model('project_category',projectCategorySchema)

export default projectCategoryModel;
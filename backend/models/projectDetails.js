const mongoose = require("mongoose");

const projectDetailsModel = mongoose.Schema(
  {
    user_name:{type:String,required:true},
    user_email:{type:String,required:true},
    user_contact:{type:String,required:true},
    user_address:{type:String,required:true},
    user_type:{type:String,required:true},
    user_budget:{type:String,required:true},
    user_explaination:{type:String,required:true},
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectDetailsModel);

module.exports = Project;

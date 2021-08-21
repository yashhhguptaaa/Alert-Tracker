const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    username : {type : String , require},
    password : {type : String , require},
    isAdmin : {type: Boolean, require, default : false},
    isBranchIncharge : {type: Boolean, require, default : false}
} ,{
    timestamps:true    ,
});

const userModel = mongoose.model('users',userSchema);
module.exports = userModel;
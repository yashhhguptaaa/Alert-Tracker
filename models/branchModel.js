const mongoose = require('mongoose');
const branchSchema = mongoose.Schema({
    insitutionName : {type : String , require, default : 'Bettle Nut'},
    branchName : {type : String , require},
    address : {type : String , require},
    city : {type: String, require, default : 'Pasadena'},
    contactNumber : [],
    branchIncharge : {type: String, require},
    pincodeCovered : []
} ,{
    timestamps:true    ,
});

const branchModel = mongoose.model('branches',branchSchema);
module.exports = branchModel;
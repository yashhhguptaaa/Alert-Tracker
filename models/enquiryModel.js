const mongoose = require('mongoose');
const enquirySchema = mongoose.Schema({
    username : {type : String , require},
    email : {type : String , require},
    phone : {type: Number, require},
    address : {type: String, require},
    pincode : {type: Number, require}
} ,{
    timestamps:true    ,
});

const enquiryModel = mongoose.model('enquiries',enquirySchema);
module.exports = enquiryModel;
const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

router.post('/register' , async (req,res) =>{
    const { username , password} = req.body;

   

    try {
        const existingUser = await User.findOne({ username });

        if (existingUser)
          return res.status(400).json({
            errorMessage: "An account with this username already exists.",
          });
        const newUser = new User({username,password});

        newUser.save();
        res.send('User Registered Successfully')
    } catch (error) {
        return res.status(400).json({message:error});
    }

});

router.post('/login' , async (req,res) => {
    const {username,password} = req.body;

    try {
        const user = await User.find({username,password});
        if(user.length > 0 ){
            
           const currentUser = {
               username : user[0].username,
               isAdmin : user[0].isAdmin,
               isBranchIncharge : user[0].isBranchIncharge,
               pincode : user[0].pincode,
               _id : user[0]._id
           }
           res.send(currentUser);
        }
        else{
            return res.status(400).json({message:'User Login Fail'});
        }

    } catch (error) {
        return res.status(400).json({message:'Something went wrong'});
    }
})

router.get('/getallusers', async (req, res) => {

    try {
        const users = await User.find({})
        res.send(users)
    } catch (error) {
        return res.status(400).json({message:error});
    }
    
})

// router.post('/deleteuser' , async (req,res) => {
//     const userid = req.body.userid

//     try {
//         await User.findOneAndDelete({_id : userid})
//         res.send("User Deleted Successfully")
//     } catch (error) {
//         return res.status(400).json({message:error});
//     }
// })

module.exports = router;
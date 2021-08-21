const express = require('express');
const router = express.Router();
const Enquiry = require('../models/enquiryModel')

router.get('/getAllEnquiry', async (req, res) => {
    try {
        const enquiries = await Enquiry.find({})
        res.send(enquiries)
    } catch (error) {
        return res.status(400).json({ message: error });
    }
});

router.post('/newenquiry', async (req, res) => {

    const {email, phone, address, pincode, currentUser} = req.body;
    try {


        const newenquiry = new Enquiry({
            username: currentUser.username,
            email: email,
            phone: phone,
            address: address,
            pincode: pincode

        })
        console.log(newenquiry);

        await newenquiry.save()
        res.send('New Enquiry Added Successfully')
    } catch (error) {
        return res.status(400).json({ message: error });
    }
});

// router.post('/getpizzabyid', async ( req, res) => {

//     const pizzaid = req.body.pizzaid;
//     try {
//         const pizza =await Pizza.findOne({_id : pizzaid})
//         res.send(pizza)
//     } catch (error) {
//         return res.status(400).json({ message: error });
//     }
// })

// router.put('/editpizza', async ( req, res) => {

//     const editedpizza = req.body.editedpizza;
//     try {
//         const pizza =await Pizza.findOne({_id : editedpizza._id})

//         pizza.name = editedpizza.name
//         pizza.description = editedpizza.description
//         pizza.category = editedpizza.category
//         pizza.image = editedpizza.image
//         pizza.prices = [editedpizza.prices]

//         await pizza.save();

//         res.send('Pizza Details Edited Successfully')

//     } catch (error) {
//         return res.status(400).json({ message: error });
//     }
// })

// router.post('/deletepizza', async (req,res) => {
//     const pizzaid = req.body.pizzaid;
//     try {
//         await Pizza.findOneAndDelete({_id : pizzaid})
//         res.send('Pizza Deleted Successfully')
//     } catch (error) {
//         return res.status(400).json({ message: error });
//     }
// })

module.exports = router;
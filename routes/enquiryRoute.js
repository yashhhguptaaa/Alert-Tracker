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

        await newenquiry.save()
        res.send(newenquiry);
    } catch (error) {
        return res.status(400).json({ message: error });
    }
});

router.post('/getenquirybypin', async ( req, res) => {

    const {pincodes} = req.body;
    console.log(pincodes);
    try {
        // const enquires = await pincodes.map(pincode => {
        //      const enquiry =  Enquiry.find({pincode : pincode})
        //      return enquiry;
        //     })
        const enquires =await Enquiry.find({pincode : pincodes})
        console.log(enquires)
        res.send(enquires)
    } catch (error) {
        return res.status(400).json({ message: error });
    }
})

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
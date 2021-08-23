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

    const pincodes = req.body.pincode;
    console.log(pincodes);
    console.log(typeof(pincodes));
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

router.post('/seenEnquiry', async(req,res) => {
    const enquiryid = req.body.enquiryid
    try {
        const enquiry =await Enquiry.findOne({ _id : enquiryid})
        enquiry.bInchargeSeen = true
        await enquiry.save()
        res.send("Enquiry seen By Branch Incharge")
    } catch (error) {
        return res.send(400).json({message : 'Something went wrong'})
    }
})

router.post('/seenEnquiryAdmin', async(req,res) => {
    const enquiryid = req.body.enquiryid
    try {
        const enquiry =await Enquiry.findOne({ _id : enquiryid})
        enquiry.adminSeen = true
        await enquiry.save()
        res.send("Enquiry seen By Admin")
    } catch (error) {
        return res.send(400).json({message : 'Something went wrong'})
    }
})




module.exports = router;
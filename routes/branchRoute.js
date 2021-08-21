const express = require('express');
const router = express.Router();
const Branch = require('../models/branchModel');

router.get('/getAllBranches', async (req, res) => {
    try {
        const branches = await Branch.find({})
        res.send(branches)
    } catch (error) {
        return res.status(400).json({ message: error });
    }
});

router.post('/getBranchesByPincode', async ( req, res) => {

    const pincode = req.body.pincode;
    
    try {
        const branches =await Branch.find({pincodeCovered : pincode})
        res.send(branches)
    } catch (error) {
        return res.status(400).json({ message: error });
    }
})

// router.post('/addpizza', async (req, res) => {

//     const pizza = req.body.pizza;
//     try {


//         const newpizza = new Pizza({
//             name: pizza.name,
//             image: pizza.image,
//             varients: ['small', 'medium', 'large'],
//             description: pizza.description,
//             category: pizza.category,
//             prices: [pizza.prices],

//         })

//         await newpizza.save()
//         res.send('New Pizza Added Successfully')
//     } catch (error) {
//         return res.status(400).json({ message: error });
//     }
// });

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
const express=require('express');
const router=express.Router();
const MenuItem = require('../Models/MenuItem')

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newItem = new MenuItem(data);
        const response = await newItem.save();
        console.log("Data Saved");
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" })
    }
})

router.get('/', async (req, res) => {
    try {
        const data = await MenuItem.find();
        console.log('data fatched');
        res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' })

    }
})

module.exports=router;
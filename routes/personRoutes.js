const express = require('express');
const router = express.Router();
const Person = require('../Models/Person')

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new Person(data);

        const respone = await newPerson.save();
        console.log("Data Saved");
        res.status(200).json(respone);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });

    }
})

router.get('/:workType', async (req, res) => {
    try {
        const workType = req.params.workType;
        if (workType == 'chef' || workType == 'manager' || workType == 'waiter') {
            const response = await Person.find({ work: workType });
            console.log('data fatched');
            res.status(200).json(response);
        }
        else {
            req.status(404).json({ error: 'invalid work type' })
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

router.get('/', async (req, res) => {
    try {
        const data = await Person.find();
        console.log('data fatched');
        res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' })

    }
})

router.put('/:id', async (req, res) => {
    try {
        const personId = req.params.id;
        const updatedPersonData = req.body;
        const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
            new: true,
            runValidators: true
        });

        if (!response) {
            return res.status(404).json({ error: 'Record Not Found' })
        }
        console.log('data updated')
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' })
    }

})

router.delete('/:id', async (req, res) => {
    try {
        const personId = req.params.id;
        const response = await Person.findByIdAndDelete(personId);

        if (!response) {
            return res.status(404).json({ error: "Record Not Found" })
        }
        res.status(200).json({ message: 'person deleted succesfully' });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internl Server Error' })
    }


})
module.exports = router;
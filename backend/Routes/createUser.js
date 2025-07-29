const express = require('express')

const router = express.Router()

const User = require('../models/User.js')

// Route to create a new user

router.post('/createUser', async (req, res) => {
    
    const { name, email, password, location } = req.body;
    try {
        await User.create({
            name: name,
            email: email,
            password: password,
            location: location
        })
        // res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
        
    }      
})

module.exports = router;
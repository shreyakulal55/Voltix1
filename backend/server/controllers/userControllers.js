const User = require('../models/user');
const bd = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;

const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
    };

const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
    };

const register = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = new User({ ...req.body, password: hashedPassword });
        const newUser = await user.save();
        res.status(201).json({statusCode:"200",message:'Registered successfuly...',newUser});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
    };

// const updateUser = async (req, res) => {
//     const { id } = req.params;
//     try{
//         const updatedUser= await User.findByIdAndUpdate(id, req.body, { new: true });
//         return res.status(200).json({statusCode:"200",message:'updated successfuly...',updatedUser});

//     }
//     catch(err){
//         return res.status(500).json({statusCode:"500", error: err.message });
//     }
//     };

const updateUser = async (req, res) => {
    const { id } = req.params;
    try {
        const username = getUserIdFromToken(req); // Get the userId from the JWT token
        // console.log(userId);
        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
        return res.status(200).json({ statusCode: "200", message: 'Updated successfully...', updatedUser, username });
    } catch (err) {
        return res.status(500).json({ statusCode: "500", error: err.message });
    }
};

const deleteUser = async (req, res) => {
    const { id } = req.params;
    try{
        const userId = getUserIdFromToken(req);
        const deletedUser= await User.findByIdAndDelete(id);
        return res.status(200).json({statusCode:"200",message:'deleted successfuly...',userId});

    }
    catch(err){
        return res.status(500).json({statusCode:"500", error: err.message });
    }
    };
    function getUserIdFromToken(req) {
        const authHeader = req.headers.authorization;
    
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            // Handle missing or incorrectly formatted token
            return null;
        }
    
        const token = authHeader.split(' ')[1]; // Get the token part (after "Bearer")
    //    console.log(token);
    //    console.log(secretKey);
        try {
            const decoded = jwt.verify(token, secretKey);
            console.log(decoded);
            return decoded.userId;
        } catch (error) {
            // Handle token verification errors
            return null;
        }
    }

module.exports = {
    getUsers,
    getUserById,
    register,
    updateUser,
    deleteUser,
};
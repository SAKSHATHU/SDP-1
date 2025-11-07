const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
require('../db/conn');
const User = require("../model/userSchema");
router.get('/', (req, res) => {
  res.send(`Hello world from the router`);
});

/* router.post('/register',(req, res)=>{
    const { name, email, phone, work, password, cpassword}=req.body;
    if(!name || !email || !phone || !work || !password || !cpassword ){
        return res.status(422).json({error:"fill all the feilds"});
    }

    User.findOne({email:email})
    .then((userExist)=>{
        if(userExist){
            return res.status(422).json({error:"email already exist"});
        }
        const user=new User({name, email, phone, work, password, cpassword});
        user.save().then(()=>{
            res.status(201).json({message:"user registered sucessfull"});
        }).catch((err)=>res.status(500).json({error:"failed to registered"}));
    }).catch(err=>{console.log(err);});


}); */

//await

router.post('/register', async (req, res) => {
  const {
    name,
    email,
    phone,
    work,
    password,
    cpassword
  } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({
      error: "fill all the feilds"
    });
  }
  try {
    const userExist = await User.findOne({
      email: email
    });
    if (userExist) {
      return res.status(422).json({
        error: "email already exist"
      });
    } else if (password != cpassword) {
      return res.status(422).json({
        error: "password is not matching"
      });
    } else {
      const user = new User({
        name,
        email,
        phone,
        work,
        password,
        cpassword
      });
      const userRegister = await user.save();
      if (userRegister) {
        res.status(201).json({
          message: "user registered sucessfull"
        });
      } else {
        res.status(500).json({
          error: "failed to registered"
        })
      }
    }

  } catch (err) {
    console.log(err);
  }
});

// login route

router.post('/signin', async (req, res) => {
  try {
    let token;
    const {
      email,
      password
    } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        error: "plz filled the data"
      });
    }

    const userLogin = await User.findOne({
      email: email
    });
    if (!userLogin) {
      res.json({
        message: "user error"
      });
    } else {
      res.json({
        message: "user signin successfully"
      });
    }
    //console.log(userLogin);
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      token = await userLogin.generateAuthToken();
      console.log(token);
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true
      });


      if (!isMatch) {
        res.status(400).json({
          error: "Invalid credientials password "
        });
      } else {
        res.json({
          message: "user signin successfully"
        });
      }
    } else {
      res.status(400).json({
        error: "invalid credientials"
      });
    }
  } catch (err) {
    console.log(err);
  }
});

//logout

router.get('/Logout', (req, res) => {
  console.log(`hello my logout`);
  res.clearCookie('jwtoken', {
    path: '/'
  });
  res.status(200).send('User logout');
});


module.exports = router;
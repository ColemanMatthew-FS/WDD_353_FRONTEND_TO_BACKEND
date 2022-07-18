const express = require("express");
const router = express.Router();
const validation = require("../validation/validation");
const sessions = require('express-session');
const getRegistration = require('../api/api/api');

router.use(
    sessions({
        secret: 'thisismysecretkey',
        saveUninitialized: true,
        resave: false,
    })
);

let session;

router.get("/",(req,res)=>{
    session = req.session;
    res.render('index', {
        pagename: "Home",
        sess: session
    });
});

router.get("/about",(req,res)=>{
    session = req.session;
    res.render('about', {
        pagename: "About",
        sess: session
    });
});

router.get("/register",(req,res)=>{
    session = req.session;
    res.render('register', {
        pagename: "Registration",
        sess: session
    });
});

router.post("/register", async(req,res)=>{
    errors = validation(req.body)
    console.log(errors)
    if(errors.status == "Registration Successful!"){
        const data = req.body;
        await getRegistration(data).then(result => {
            res.render('index', {
                pagename: 'Home',
                message: result.data.message,
                sess: session,
            })
        }).catch(err => {
            console.log(err.message)
            res.render('register', {
                pagename: 'Registration',
                error: err.message
            })
        });
    } else {
        res.render('register', {
            pagename: 'Registration',
            errors: errors
        })
    }
});

router.get("/contact",(req,res)=>{
    session = req.session;
    res.render('contact', {
        pagename: "Contact",
        sess: session
    });
});

router.get("/post",(req,res)=>{
    session = req.session;
    res.render('post', {
        pagename: "Post",
        sess: session
    });
});

router.get("/signin",(req,res)=>{
    res.render('signin', {
        pagename: 'Sign In',
    });
});

router.post('/login', (req, res) => {
    if (req.body.email == "Mike@aol.com" && req.body.password == "abc123") {
        session = req.session;
        session.userid = "Bob";
        session.loggedin = true;
        res.render('index', {
            pagename: 'Home',
            sess: session,
        });
    }
    else {
        session.loggedin = false;
        res.render('signin', {
            pagename: 'Sign In',
            error: 'Invalid Credentials'
        });
    }
});

router.get('/logout', (req, res) => {
    req.session.destroy(null);
    res.render('index', {
        pagename: 'Home'
    });
});

module.exports = router;
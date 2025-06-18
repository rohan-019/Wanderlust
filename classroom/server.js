const express = require('express');
const app = express();

const flash = require('connect-flash');
const session = require('express-session');

const sessionOptions = {
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 1000 * 20, // 20 seconds
        maxAge: 1000 * 20, // 20 seconds
        httpOnly: true, // Helps prevent XSS attacks
        secure: false // Set to true if using HTTPS
    }
};


app.use(session(sessionOptions));
app.use(flash());

app.use((req, res, next) => {
   res.locals.errorMsg = req.flash("error");
   res.locals.successMsg = req.flash("success");
   next();
});

app.get('/register', (req, res) => {
    let {name="anonymous"} = req.query;
    req.session.name = name;
    if(name === "anonymous") {
        req.flash("error", `Name cannot be anonymous. Please provide a valid name.`);
    }else{
        req.flash("success", `Welcome, ${name}! You have been registered.`);
    }
    res.redirect('/hello');
});

app.get('/hello', (req, res) => {
    if(!req.session.name) {
        return res.status(400).send('No user registered. Please register first.');
    }
    res.render('page.ejs', {name:req.session.name});
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


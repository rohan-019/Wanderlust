const express = require('express');
const app = express();
const mongoose = require('mongoose');
const ejs = require("ejs");
const path = require("path");
const ejsmate = require("ejs-mate");
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const User = require('./models/user'); // Assuming you have a User model
const LocalStrategy = require('passport-local').Strategy;

const sessionOptions = {
    secret: 'thisshouldbeasecret',  // Change this to a strong secret in production
    resave: false,
    saveUninitialized: true,
    cookie : {
        expires: Date.now() + 7 * 1000 * 60 * 60 * 24, // 7 days
        maxAge: 7 * 1000 * 60 * 60 * 24, // 7 days
        httpOnly: true, // Helps prevent XSS attacks
        secure: false // Set to true if using HTTPS
    }
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currentUser = req.user; // Make current user available in views
    next();
});

app.get("/demouser", async (req, res) => {
    let FakeUser = new User({
        email: "demo@example.com",
        username: "demo",
    });
    let registeredUser = await User.register(FakeUser, "password");
    res.send(registeredUser);
});

// Routers
const listingRouter = require('./routes/listing');
const reviewRouter = require('./routes/review'); // ✅ NEW
const userRouter = require('./routes/user'); // Assuming you have a user router

main().then(() => console.log("connected to db")).catch(err => console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

app.engine("ejs", ejsmate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));
app.use(methodOverride('_method'));

// Routes
app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter); // ✅ Mount review router
app.use("/", userRouter); // Assuming you have a user router

app.get("/", (req, res) => {
    res.send("Server is la la working");
});

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});

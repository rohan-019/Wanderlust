const express = require('express');
const router = express.Router({ mergeParams: true });
const Listing = require("../models/listing");
const Review = require("../models/review");
const {isloggedIn} = require("../middleware"); 
const reviewsController = require("../controllers/review.js");
// Add review to a listing
router.post("/", isloggedIn,reviewsController.addReview);

module.exports = router;

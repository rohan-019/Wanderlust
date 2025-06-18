const express = require('express');
const router = express.Router();
const Listing = require("../models/listing");
const {isloggedIn, isOwner} = require("../middleware"); 
const listingsController = require("../controllers/listing.js");

router.route('/')
.get(listingsController.index)
.post(isloggedIn, listingsController.createListing);

// New listing form
router.get('/new', isloggedIn, listingsController.newListing);

router.route('/:id')
.get(listingsController.showListing)
.put(isloggedIn,isOwner, listingsController.updateListing)
.delete(isloggedIn,isOwner, listingsController.destroyListing);

// Edit form
router.get("/:id/edit", isloggedIn,isOwner, listingsController.renderEditForm);

module.exports = router;

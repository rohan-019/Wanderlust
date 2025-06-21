const express = require('express');
const router = express.Router();
const Listing = require("../models/listing");
const {isloggedIn, isOwner} = require("../middleware"); 
const listingsController = require("../controllers/listing.js");
const multer = require('multer');
const { cloudinary, storage } = require('../cloudconfig.js'); // Assuming you have a cloudconfig.js for Cloudinary
const upload = multer({ storage: storage });

router.route('/')
.get(listingsController.index)
.post(isloggedIn, upload.single('image'), listingsController.createListing);


// New listing form
router.get('/new', isloggedIn, listingsController.newListing);

router.route('/:id')
.get(listingsController.showListing)
.put(isloggedIn,isOwner, upload.single('image'), listingsController.updateListing)
.delete(isloggedIn,isOwner, listingsController.destroyListing);

// Edit form
router.get("/:id/edit", isloggedIn,isOwner,listingsController.renderEditForm);

module.exports = router;

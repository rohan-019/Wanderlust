const express = require('express');
const router = express.Router();
const Listing = require("../models/listing");
const {isloggedIn, isOwner} = require("../middleware"); 

// Create sample listing (for test)
router.get("/testlisting", async (req, res) => {
    const sampleListing = new Listing({
        title: "Sample Listing",
        description: "This is a sample listing",
        price: 100,
        location: "New York",
        country: "USA"
    });
    await sampleListing.save();
    res.send("Sample listing created successfully!");
});

// All listings
router.get("/", async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index", { listings: allListings });
});

// New listing form
router.get('/new', isloggedIn, (req, res) => {
    res.render('listings/new');
});

// Create listing
router.post("/", isloggedIn, async (req, res) => {
    try {
        const newListing = new Listing({ ...req.body, owner: req.user._id });
        await newListing.save();
        req.flash("success", "Listing created successfully!");
        res.redirect("/listings");
    } catch (err) {
        if (err.name === 'ValidationError') {
            return res.status(400).send(err.message);
        }
        res.status(500).send("Something went wrong");
    }
});

// Show listing
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews").populate("owner");
    if (!listing) {
        return res.status(404).send("Listing not found");
    }
    console.log(listing);
    res.render("listings/show", { listing });
});

// Edit form
router.get("/:id/edit", isloggedIn,isOwner, async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit", { listing });
});

// Update listing
router.put("/:id", isloggedIn,isOwner, async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndUpdate(id, req.body, { new: true });
    req.flash("success", "Listing updated successfully!");
    res.redirect(`/listings/${id}`);
});

// Delete listing
router.delete("/:id", isloggedIn,isOwner, async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing deleted successfully!");
    res.redirect("/listings");
});

module.exports = router;

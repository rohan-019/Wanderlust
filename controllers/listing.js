const Listing = require("../models/listing");

module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index", { listings: allListings });
}

module.exports.newListing = (req, res) => {
    res.render('listings/new');
}

module.exports.createListing = async (req, res) => {
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
}

module.exports.showListing = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews").populate("owner");
    if (!listing) {
        return res.status(404).send("Listing not found");
    }
    res.render("listings/show", { listing });
}

module.exports.renderEditForm = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit", { listing });
}

module.exports.updateListing = async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndUpdate(id, req.body, { new: true });
    req.flash("success", "Listing updated successfully!");
    res.redirect(`/listings/${id}`);
}

module.exports.destroyListing = async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing deleted successfully!");
    res.redirect("/listings");
}
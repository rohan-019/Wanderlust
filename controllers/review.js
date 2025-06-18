const Listing = require('../models/listing');
const Review = require('../models/review');

module.exports.addReview =  async (req, res) => {
    const listing = await Listing.findById(req.params.id);
    const newReview = new Review(req.body.review);

    if (!newReview.rating) {
        newReview.rating = 3;
    }

    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();

    res.redirect(`/listings/${listing._id}`);
}
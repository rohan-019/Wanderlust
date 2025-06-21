const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    imageUrl: {
        url: String,
        filename: String
    },
    price: Number,
    location: String,
    country: String, 
    reviews: [
        {
            type:Schema.Types.ObjectId,
            ref: 'Review',
        }
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
})

const Listing = mongoose.model('Listing', ListingSchema);
module.exports = Listing;

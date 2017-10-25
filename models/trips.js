const mongoose = require( 'mongoose' );

const { Schema } = mongoose;

const tripSchema = new Schema( {
    'tripName': {
        'type': String,
        'required': true
    },
    'placeIds': {
        'type': Array,
        'maxLength': 12
    },
    'createdAt': {
        'type': Date,
        'default': Date.now
    },
    'lastUpdated': {
        'type': Date,
        'default': Date.now
    },
    'ownerId': {
        'type': String,
        'required': true,
        'unique': true
    }
} );

const Trip = mongoose.model( 'Trip', tripSchema );

module.exports = Trip;

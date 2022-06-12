const mongoose = require("mongoose");
const constants = require("../utils/constants");
const bookingSchema = mongoose.Schema({
    theatreId : {
        type : mongoose.SchemaTypes.ObjectId,
        ref : "Theatre"
    },
    movieId : {
        type : mongoose.SchemaTypes.ObjectId,
        ref : "Movie"
    },
    createdAt : {
        type : Date,
        immutable : true,
        default : ()=>{
            return Date.now();
        }
    },
    updatedAt : {
        type : Date,
        default : ()=>{
            return Date.now();
        }
    },
    noOfTickets : {
        type : Number,
        required : true
    },
    bookingStatus : {
        type : String,
        enum : [constants.bookingStatus.cancelled,constants.bookingStatus.completed,constants.bookingStatus.failed,constants.bookingStatus.in_progress],
        default : constants.bookingStatus.completed
    }
})

module.exports = mongoose.model("booking",bookingSchema);
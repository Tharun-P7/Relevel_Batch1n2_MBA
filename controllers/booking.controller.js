const Booking = require("../models/booking.model");

exports.addBooking = async(req,res)=>{
    const bookingObj ={
        theatreId : req.body.theatreId,
        movieId : req.body.movieId,
        noOfTickets : req.body.noOfTickets,
    }
    try{
    const booking = await Booking.create(bookingObj);
    return res.status(201).send(booking);
    }
    catch(err){
        console.log("Exception occured while adding the booking", err);
        return res.status(500).send({
            message : "Internal Service Error"
        })
    }
}

exports.updateBooking = async(req,res) => {
    try{
    const booking = await Booking.findOne({
    _id : req.params._id
    })
    booking.theatreId = (booking.theatreId != undefined)? req.body.theatreId : booking.theatreId ;
    booking.movieId = (booking.movieId != undefined)? req.body.movieId : booking.movieId ;
    booking.noOfTickets = (booking.noOfTickets != undefined)? req.body.noOfTickets : booking.noOfTickets ;
    const updateBookingObj = await booking.save();
    return res.status(200).send(updateBookingObj);
}
    catch(err){
        console.log("Error while updating the Booking");
        return res.status(500).send({
            message : "Internal Server Error"
        })
    }
}
exports.getAllBookings = async(req,res) => {
    try{
        queryObj = {}
        if(req.query.movieId && req.query.movieId != undefined){
            queryObj.movieId = req.query.movieId
        }
        if(req.query.theatreId && req.query.theatreId != undefined){
            queryObj.theatreId = req.query.theatreId
        }
        if(req.query.noOfTickets && req.query.noOfTickets != undefined){
            queryObj.noOfTickets = req.query.noOfTickets
        }
        const bookings = await Booking.find(queryObj);
        return res.status(200).send(bookings)
    }catch(err){
        console.log("Error while fetching all the bookings",err)
        return res.status(500).send({
            message : "Internal server Error"
        })
    }
}
const bookingController = require("../controllers/booking.controller");

module.exports = (app)=>{
    app.post("/mba/api/v1/bookings",bookingController.addBooking);
    app.get("/mba/api/v1/bookings",bookingController.getAllBookings);
    app.put("/mba/api/v1/bookings/",bookingController.updateBooking);
}
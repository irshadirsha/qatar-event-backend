// routes/bookingRoutes.js
const express = require("express");

const router = express.Router();
const bookingController = require("../controllers/bookingController");

// Create a new booking
router.post("/bookings", bookingController.createBooking);

// Cancel a booking
router.patch("/bookings/:id/cancel", bookingController.cancelBooking);

// Get all bookings
router.get("/bookings", bookingController.getBookings);

// edit selected items
router.put("/bookings/:id", bookingController.editBooking);

module.exports = router;

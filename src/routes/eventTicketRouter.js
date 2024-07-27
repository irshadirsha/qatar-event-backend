const express =require ('express')
const router= express.Router()

const eventTicketController = require ('../controllers/eventTicketController')

router.post('/tbooking',eventTicketController.TickBooking)

router.patch('/cancelbooking/:bookingId',eventTicketController.cancelBooking)

router.get('/tbooking/:bookingId',eventTicketController.GetBookingById)

router.get('/get-tbooking',eventTicketController.GetAllBooking)

module.exports=router 
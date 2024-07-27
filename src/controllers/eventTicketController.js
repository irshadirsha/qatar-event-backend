const TicketBooking = require("../models/eventTicketModel")

const TickBooking=async(req,res)=>{
    try {
        const { userId, eventId, tickets, totalPrice, notes,bookingCategory,}=req.body
        console.log("api called ---.",userId, eventId, tickets, totalPrice, notes,bookingCategory)
        const newBooking = new TicketBooking ({
            userId,
            eventId,
            tickets,
            totalPrice,
            notes,
            bookingCategory,
        })
        const savedBooking = await newBooking.save()
        console.log("saved booking", savedBooking) 
        res.status(201).json(savedBooking)
    } catch (error) {
        res.status(400).json({
            message:error.message
        })
    }
}

const cancelBooking = async (req,res)=>{
    try {
        console.log("api called for booking cancelation");
        const {bookingId}=req.params;
        console.log("booking id in params",bookingId)
        console.log("669dde92589013d65c8c20ca");
        const updatedBooking= await TicketBooking.findByIdAndUpdate(bookingId,
         {status:"cancelled"},
         {new:true}
        )
         if(!updatedBooking){
        return res.status(404).json({
                message:"Booking Not Found"
            })
         }
         console.log("updated",updatedBooking)
         res.json(updatedBooking)
    } catch (error) {
       res.status(400).json({
        message:error.message
       })
    }
}


const GetBookingById=async(req,res)=>{
    try {
        console.log("api called--")
      const {bookingId}=req.params
      const booking = await TicketBooking.findById(bookingId).populate('userId').populate('eventId')

      if(!booking){
        return res.status(404).json({
            message:"User Not Found"
        })
      }
      res.json(booking)
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}

const GetAllBooking= async(req,res)=>{
    try {
        console.log("api called for getting all bookings");
        const bookings = await TicketBooking.find().populate("userId").populate("eventId")
        console.log("bookings",bookings)
        res.json(bookings)
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}



module.exports ={TickBooking,cancelBooking,GetBookingById,GetAllBooking}
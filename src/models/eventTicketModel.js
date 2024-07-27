
const mongoose = require("mongoose");

const { Schema } = mongoose;

const ticketBookingSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    eventId: {
      type: Schema.Types.ObjectId,
      ref: "Event",
      required: true,
    },
    tickets: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["booked", "cancelled"],
      default: "booked",
    },
    bookingDate: {
      type: Date,
      default: Date.now,
    },
    notes: {
      type: String,
    },
    bookingCategory: {
        type: String,
        enum: ["single", "family", "couple"],
        required: true,
      },
  },
  {
    timestamps: true,
  },
);

const TicketBooking = mongoose.model("TicketBooking", ticketBookingSchema);

module.exports = TicketBooking;

import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    userEmail: {
      type: String,
    },
    tourName: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
      maxlength: 20,
    },
    guestSize: {
      type: Number,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      maxlength: 12,
      minlength: 10,
    },
    bookAt: {
      type: Date,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    photo: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);

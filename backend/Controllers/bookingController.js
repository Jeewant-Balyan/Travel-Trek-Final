import Booking from "./../models/Booking.js";

// create new booking
export const createBooking = async (req, res) => {
  const newBooking = new Booking(req.body);

  try {
    const savedBooking = await newBooking.save();

    res.status(200).json({
      success: true,
      message: "Your tour is booked!",
      data: savedBooking,
    });
  } catch (error) {
    res.status(500).json({ success: true, message: "Internal server error!" });
  }
};

// get single booking
export const getBooking = async (req, res) => {
  const id = req.params.id;

  try {
    const book = await Booking.findById(id);

    res.status(200).json({ success: true, message: "Successful!", data: book });
  } catch (error) {
    res.status(404).json({ success: true, message: "Not Found!" });
  }
};

// get all booking
// export const getAllBooking = async(req,res) => {

//    try {
//       const books = await Booking.find()

//       res.status(200).json({success:true, message:"Successful!", data:books})
//    } catch (error) {
//       res.status(500).json({success:true, message:"Internal server error!"})
//    }
// }

// testing
// get all booking By User Email
export const getAllBooking = async (req, res) => {
  try {
    const books = await Booking.find(req.query);

    res
      .status(200)
      .json({ success: true, message: "Successful!", data: books });
  } catch (error) {
    res.status(500).json({ success: true, message: "Internal server error!" });
  }
};

// get all bookings by user email
export const getBookingsByEmail = async (req, res) => {
  const userEmail = req.params.email; // Extract the email from request parameters

  try {
    const bookings = await Booking.find({ userEmail }); // Query bookings by user email

    if (!bookings) {
      return res.status(404).json({ success: false, message: "No bookings found for the user." });
    }

    res.status(200).json({ success: true, message: "Successful!", data: bookings });
  } catch (error) {
    console.error("Error fetching bookings:", error.message);
    res.status(500).json({ success: false, message: "Internal server error!" });
  }
};




import express from "express";
import {
  createBooking,
  getAllBooking,
  getBookingsByEmail,
  getBooking,
} from "../Controllers/bookingController.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", createBooking);
router.get("/:id", getBooking);
router.get("/", getAllBooking);
router.get("/user/:email", getBookingsByEmail);

export default router;

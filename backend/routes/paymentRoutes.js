import express from "express";
const app = express();
import {
  checkout,
  getRecentPayment,
  paymentVerification,
} from "../Controllers/paymentController.js";
const router = express.Router();

router.route("/checkout").post(checkout);

router.route("/paymentverification").post(paymentVerification);

//Get recent payments
router.get("/", getRecentPayment);
export default router;

import Payment from "./../models/Payment.js";
import { instance } from "../index.js";
import crypto from "crypto";
export const checkout = async (req, res) => {
  const options = {
    amount: Number(req.body.amount * 100),
    currency: "INR",
  };
  const order = await instance.orders.create(options);

  res.status(200).json({
    success: true,
    order,
  });
};
export const paymentVerification = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_APT_SECRET)
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    // Database comes here

    await Payment.create({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    });

    res.redirect(
      `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
    );
  } else {
    res.status(400).json({
      success: false,
    });
  }
};

// GetRecentPayments
export const getRecentPayment = async (req, res) => {
  try {
    const recentPayment = await Payment.findOne()
      .sort({ createdAt: -1 })
      .select("razorpay_payment_id");
    if (!recentPayment) {
      return res
        .status(404)
        .json({ success: false, message: "No recent payments found" });
    }
    res.status(200).json({
      success: true,
      razorpay_payment_id: recentPayment.razorpay_payment_id,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, message: "Internal server error!" });
  }
};

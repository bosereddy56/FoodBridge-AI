import express from "express";

import {
  createDonation,
  getDonations,
  claimDonation,
  deliverDonation,
} from "../controllers/donationController.js";

const router = express.Router();

// Create Donation
router.post(
  "/create",
  createDonation
);

// Get All Donations
router.get(
  "/all",
  getDonations
);

// Claim Donation
router.put(
  "/claim/:id",
  claimDonation
);

// Mark Donation as Delivered
router.put(
  "/deliver/:id",
  deliverDonation
);

export default router;
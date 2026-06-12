import mongoose from "mongoose";

const claimSchema = new mongoose.Schema(
  {
    donationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Donation"
    },

    ngoId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },

    pickupStatus: {
      type: String,
      default: "Pending"
    }
  },
  { timestamps: true }
);

export default mongoose.model(
  "Claim",
  claimSchema
);
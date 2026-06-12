import mongoose from "mongoose";

const donationSchema = new mongoose.Schema(
  {
    restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    foodName: {
      type: String,
      required: true,
      trim: true,
    },

    quantity: {
      type: String,
      required: true,
      trim: true,
    },

    expiryTime: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
      trim: true,
    },

    // Food Image
    image: {
      type: String,
      default: "",
    },

    // AI Food Quality Score
    aiScore: {
      type: Number,
      default: 95,
    },

    // AI Recommendation
    aiRecommendation: {
      type: String,
      default: "Safe for Donation",
    },

    // AI Prediction
    aiPrediction: {
      type: String,
      default: "",
    },

    // Suggested NGO
    recommendedNGO: {
      type: String,
      default: "",
    },

    // Donation Status
    status: {
      type: String,
      enum: [
        "Available",
        "Claimed",
        "Delivered",
      ],
      default: "Available",
    },
  },
  {
    timestamps: true,
  }
);

const Donation = mongoose.model(
  "Donation",
  donationSchema
);

export default Donation;
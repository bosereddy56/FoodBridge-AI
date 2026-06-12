import Donation from "../models/Donation.js";

// Create Donation
export const createDonation = async (req, res) => {
  try {
    const {
      foodName,
      quantity,
      expiryTime,
      location,
      image,
    } = req.body;

    let aiScore = 95;
    let aiRecommendation = "";
    let aiPrediction = "";
    let recommendedNGO = "";

    const hours = parseInt(expiryTime);

    if (hours <= 1) {
      aiScore = 60;
      aiRecommendation = "Donate Quickly";
      aiPrediction =
        "Food should be distributed immediately";
      recommendedNGO =
        "Helping Hands NGO";
    } else if (hours <= 2) {
      aiScore = 78;
      aiRecommendation =
        "Safe for Donation";
      aiPrediction =
        "Food can feed 10+ people";
      recommendedNGO =
        "Hope Trust";
    } else if (hours <= 5) {
      aiScore = 95;
      aiRecommendation =
        "Excellent for Donation";
      aiPrediction =
        "Food can feed 25+ people";
      recommendedNGO =
        "Food For All Foundation";
    } else {
      aiScore = 99;
      aiRecommendation =
        "Highly Recommended";
      aiPrediction =
        "Food can feed 50+ people";
      recommendedNGO =
        "Care India NGO";
    }

    const donation = await Donation.create({
      foodName,
      quantity,
      expiryTime,
      location,
      image,

      restaurant: null,

      status: "Available",

      aiScore,
      aiRecommendation,
      aiPrediction,
      recommendedNGO,
    });

    res.status(201).json({
      success: true,
      donation,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Donations
export const getDonations = async (
  req,
  res
) => {
  try {
    const donations =
      await Donation.find().sort({
        createdAt: -1,
      });

    res.status(200).json({
      success: true,
      donations,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Claim Donation
export const claimDonation = async (
  req,
  res
) => {
  try {
    const donation =
      await Donation.findByIdAndUpdate(
        req.params.id,
        {
          status: "Claimed",
        },
        {
          returnDocument: "after",
        }
      );

    if (!donation) {
      return res.status(404).json({
        success: false,
        message:
          "Donation not found",
      });
    }

    res.status(200).json({
      success: true,
      donation,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Mark Donation Delivered
export const deliverDonation =
  async (req, res) => {
    try {
      const donation =
        await Donation.findByIdAndUpdate(
          req.params.id,
          {
            status: "Delivered",
          },
          {
            returnDocument:
              "after",
          }
        );

      if (!donation) {
        return res.status(404).json({
          success: false,
          message:
            "Donation not found",
        });
      }

      res.status(200).json({
        success: true,
        donation,
      });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };
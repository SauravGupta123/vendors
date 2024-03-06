const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/getUser", async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res.status(200).json({ success: true, user });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

router.post("/updateAddress", async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    // Update user's location with latitude and longitude from req.body
    user.location.latitude = req.body.latitude;
    user.location.longitude = req.body.longitude;
    await user.save();
    res
      .status(200)
      .json({ success: true, message: "Address updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;

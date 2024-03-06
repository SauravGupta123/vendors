const mongoose = require("mongoose");
const foodData = require("../dataset/foodData2.cjs");
const shops = require("../dataset/foodCategory.cjs");
const fetchData = async () => {
  try {
    // const foodItemsFetch = mongoose.connection.db.collection("foodData");
    // const foodItemsData = await foodItemsFetch.find({}).toArray();
    const foodItemsData = foodData;

    try {
      // const foodCatfetch = mongoose.connection.db.collection("foodCategory");
      // const foodCatData = await foodCatfetch.find({}).toArray();
      const foodCatData = shops;
      global.foodItems = foodItemsData;
      global.foodCat = foodCatData;
    } catch (err) {
      console.log("error fetching food category:", err);
    }
  } catch (err) {
    console.log("Error fetching data:", err);
    throw err; // Propagate the error if needed
  }
};

const connectMongoose = async () => {
  try {
    const url =
      "mongodb+srv://anurag:F9QVUjEvw8PucYO1@vendors.6nmzpaa.mongodb.net/?retryWrites=true&w=majority&appName=vendors/vendorsDB";
    await mongoose.connect(url);
    console.log("Connected to MongoDB");
    const foodData = await fetchData();
    return foodData;
  } catch (err) {
    console.log("Error connecting to MongoDB:", err);
  }
};

module.exports = connectMongoose;

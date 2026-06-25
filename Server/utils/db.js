const mongoose = require("mongoose");
// const URI = "mongodb://127.0.0.1:27017/mern_admin";
const URI = process.env.MONGODB_URI;
// mongoose.connect(URI);

const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connection successful to DB");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
};

module.exports = connectDB;

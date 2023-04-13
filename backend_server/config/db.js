const mongoose = require("mongoose");

const connectionDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

  } catch (error) {
    console.log(`error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectionDB;

// This is use to connect appliction to the DB.

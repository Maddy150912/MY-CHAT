const mongoose = require("mongoose");

const connectionDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`Mongodb connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectionDB;

// This is use to connect appliction to the DB.

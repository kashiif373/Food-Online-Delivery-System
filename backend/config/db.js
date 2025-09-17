import mongoose from "mongoose";
import 'dotenv/config.js';

export const connectDB = async () => {
  const MONGO_URL = process.env.MONGO_URL;

  if (!MONGO_URL) {
    console.error("❌ MONGO_URL is undefined. Check Render environment variables!");
    process.exit(1);
  }

  try {
    const conn = await mongoose.connect(MONGO_URL);
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    process.exit(1); // stop server if DB fails
  }
};



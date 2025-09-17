import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const url = process.env.MONGO_URL;
    if (!url) {
      throw new Error("❌ MONGO_URL is not defined in environment variables");
    }

    console.log("⏳ Connecting to MongoDB...");
    console.log("🌐 Using URL:", url.includes("localhost") ? "Local MongoDB" : "MongoDB Atlas");

    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);
    process.exit(1); // Stop the app if DB connection fails
  }
};

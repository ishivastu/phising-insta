import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("✅ Connected to DB");
  } catch (error) {
    console.error("❌ DB connection failed:", error);
    process.exit(1); // optional: stop app if DB fails
  }
};

import mongoose from "mongoose";

const dbConnStr = "localhost:5127";
export const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Database connected!");
    });

    mongoose.connection.on("error", (err) => {
      console.log("Error with connecting database! ", err);
    });

    await mongoose.connect(
      `${dbConnStr}/mimar-db`
    );
  } catch (error) {
    console.log("❌Unable to connect with DB.", error);
    process.exit();
  }
};

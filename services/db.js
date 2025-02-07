import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Database connected!");
    });

    mongoose.connection.on("error", (err) => {
      console.log("Error with connecting database! ", err);
    });

    await mongoose.connect(
      "mongodb+srv://wajahat:cY2eCJ3mleOeLcrU@cluster0.jnar07p.mongodb.net/mimar-db"
    );
  } catch (error) {
    console.log("❌Unable to connect with DB.", error);
    process.exit();
  }
};

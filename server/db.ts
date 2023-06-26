import mongoose from "mongoose";

const mongoConnection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://thegrumpywizard123:OwPZGtjuBeFvBW5J@cluster0.ec8gyfj.mongodb.net/atg-assignment"
    );
    console.log("Database Connected");
  } catch (err) {
    console.log(err);
  }
};

export default mongoConnection;

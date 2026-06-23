import mongoose from "mongoose";
import { db_Name } from "../constant.js";
const connectToMongo = async () => {
  try {
    const Instance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${db_Name}`,
    );
    console.log(
      `MonogDB Connected SuccessFully | Db Host ${Instance.connection.host}`,
    );
  } catch (error) {
    console.log("Error Happen While Connecting with MongoDB" , error);
    process.exit(1);
  }
};

export default connectToMongo;

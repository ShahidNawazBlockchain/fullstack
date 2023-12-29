import mongoose from "mongoose";

const connectionDB = async () => {
  try {
    const con = await mongoose.connect(`${process.env.MONGOOSE_URL}`);
    console.log(`db is connected on : ${con.connection.host}`);
  } catch (error) {
    console.log(`db is not connected`);
    process.exit(1);
  }
};

export default connectionDB;

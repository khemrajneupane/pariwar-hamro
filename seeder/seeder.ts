//import Room from "../backend/models/room"
import Images from "../backend/models/images";
import mongoose from "mongoose";
import { images } from "./data";

const seedImages = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://khemrjneupane:Merogoruko12taka1!@pariwarhamro.obbxd3w.mongodb.net/"
    );
    await Images.deleteMany();
    //console.log("all rooms are deleted!")
    await Images.insertMany(images);
    console.log("many images are added");
    process.exit();
  } catch (error) {
    // console.log(error)
    process.exit();
  }
};
seedImages();

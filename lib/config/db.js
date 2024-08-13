import mongoose from "mongoose";

export const ConnectDB = async () => {

    await mongoose.connect('mongodb+srv://subhajitmanna264:15151515@cluster0.6m0oz.mongodb.net/blog-app');
    console.log("db connected");
}
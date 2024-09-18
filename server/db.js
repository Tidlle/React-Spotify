import mongoose from "mongoose";

export default async function conectaNaDb(){
    mongoose.connect("mongodb+srv://Eduardo:educarmo0707@cluster0.h6rxp.mongodb.net/Spotify?retryWrites=true&w=majority&appName=Cluster0")

    return mongoose.connection;
}
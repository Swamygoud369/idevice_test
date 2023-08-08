import mongoose from "mongoose";

const Schema = mongoose.Schema;

const testimonialsSchema = new Schema({
    imageUrl:String,
    name:String,
    title:String,
    description:String,
    designation:String,
    rating:String,
});

module.exports = mongoose.models.Testimonials || mongoose.model("Testimonials", testimonialsSchema);

import mongoose from "mongoose";

const ListingSchema = new mongoose.Schema(
    {
          name:{
            type:String,
            required:true,
          },
          description:{
            type:String,
            required:true,
          },
          address:{
            type:String,
            required:true,
          },
          regularPrice:{
            type:Number,
            required:true
          },
          discountedPrice:{
            type:Number,
            required:true,
          },
          bathrooms:{
            type:Number,
            required:true,
          },
          bedrooms:{
            type:String,
            required:true,
          },
          furnished:{
            type:Boolean,
            required:true,
          },
          parking:{
            type:Boolean,
            required:true,
          },
          wifi:{
            type:Boolean,
            required:true,
          },
          type:{
            type:String,
            required:true,
          },
          offer:{
            type:Boolean,
            required:true,
          },
          imageUrl:{
             type:Array,
             required:true,
          },
          userRef:{
            type:String,
            required:true,
          },
          email:{
            type:String,
            required:true,
          },
          phonenumber:{
            type:Number,
            required:true,
          },
          whatsapp:{
            type:Number,
            required:true,
          }

          
    },
    {
       timestamps:true
    }
)

export const Listing = mongoose.model('Listing',ListingSchema)
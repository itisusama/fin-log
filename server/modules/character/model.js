import mongoose from 'mongoose';

const characterSchema = new mongoose.Schema(
  {
  image: {type: String,required: true},
  firstName: {type: String,required: true},
  lastName: {type: String,required: true},
  alias: {type: String},
  gender: {type: Boolean,required: true},
  dob: {type: Date,required: true},
  zodiac: {type: String,required: true},
  family: {type: Array,required: true},
  description: {type: String,required: true}
}, 
{timestamps: true},
);

export const Character = mongoose.model('Character', characterSchema);

import mongoose from 'mongoose';

const financeSchema = new mongoose.Schema(
  {
  userId: {type: String,required: true},
  name: {type: String,required: true},
}, 
{timestamps: true},
);

export const Finance = mongoose.model('Finance', financeSchema);

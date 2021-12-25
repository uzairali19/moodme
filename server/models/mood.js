import mongoose from 'mongoose';

const moodsSchema = mongoose.Schema({
  mood: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Mood = mongoose.model('Mood', moodsSchema);

export default Mood;

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const moodSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    usePushEach: true,
  },
);

var Moods = mongoose.model('Mood', moodSchema);

export default Moods;

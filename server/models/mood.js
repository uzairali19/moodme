import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const moodSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    mood: {
      type: String,
      required: true,
    },
    selectImage: {
      type: String,
    },
    likes: {
      type: Number,
    },
  },
  {
    timestamps: true,
    usePushEach: true,
  },
);

var Moods = mongoose.model('Mood', moodSchema);

export default Moods;

import mongoose from 'mongoose';
import Moods from '../models/mood.js';

export const getMoods = async (req, res) => {
  try {
    const moods = await Moods.find();
    console.log(moods);
    res.status(200).json(moods);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createMoods = async (req, res) => {
  const { title, description, mood, selectImage } = req.body;
  const newMood = new Moods({ title, description, mood, selectImage, likes });
  try {
    await newMood.save();
    res.status(201).json(newMood);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteMood = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send('No Mood With the Id');

  await Moods.findByIdAndRemove(id);

  res.json({ message: 'Mood Deleted Successfully' });
};

export const likeMood = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send('No Mood With the Id');

  const mood = await Moods.findById(id);
  const updatedMood = await Moods.findByIdAndUpdate(
    id,
    { likes: mood.likes + 1 },
    { new: true },
  );

  res.json(updatedMood);
};

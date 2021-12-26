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

// export const createMoods = (req, res) => {
//   const mood = req.body;
//   const newMood = new Moods(mood);
//   try {
//     await newMood.save();
//     res.status(201).json(newMood);
//   } catch (error) {
//     res.status(409).json({ message: error.message });
//   }
// };

import React, { useState } from 'react';
import {
  Paper,
  TextField,
  Typography,
  Autocomplete,
  CircularProgress,
} from '@mui/material';
// import { useSelector } from 'react-redux';
// import useStyles from './styles';

const Form = () => {
  const [moodData, setMoodData] = useState({
    title: '',
    description: '',
    mood: '',
    selectImage: '',
  });
  //   const classes = useStyles();

  const handleSubmit = () => {};

  const fetchMoodData = (e) => {
    switch (e.target.name) {
      case 'title':
        setMoodData({
          ...moodData,
          title: e.target.value,
        });
        break;
      case 'description':
        setMoodData({
          ...moodData,
          description: e.target.value,
        });
        break;
      case 'mood':
        setMoodData({
          ...moodData,
          mood: e.target.value,
        });
        break;
      case 'selectImage':
        setMoodData({
          ...moodData,
          selectImage: e.target.value,
        });
        break;
      default:
        break;
    }
  };

  const moodsList = [
    { label: 'Cheerful' },
    { label: 'Reflective' },
    { label: 'Gloomy' },
    { label: 'Humorous' },
    { label: 'Melancholy' },
    { label: 'Idyllic' },
    { label: 'Whimsical' },
    { label: 'Romantic' },
    { label: 'Mysterious' },
    { label: 'Ominous' },
    { label: 'Calm' },
    { label: 'Lighthearted' },
    { label: 'Hopeful' },
    { label: 'Angry' },
    { label: 'Fearful' },
    { label: 'Tense' },
    { label: 'Lonely' },
  ];

  const selectMood = (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={moodsList}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
  );

  //   console.log(moodData);

  return (
    <Paper>
      <form
        autoComplete="off"
        noValidate
        // className={classes.form}
        onSubmit={handleSubmit}
      >
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ display: { xs: 'block', sm: 'block' } }}
        >
          Creating a mood
        </Typography>
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          value={moodData.title}
          onChange={fetchMoodData}
        />
        <TextField
          name="description"
          variant="outlined"
          label="Description"
          value={moodData.description}
          onChange={fetchMoodData}
        />
        {/* <TextField
          name="mood"
          variant="outlined"
          label="Mood"
          value={moodData.mood}
          onChange={fetchMoodData}
        /> */}
        {selectMood}
        <TextField
          name="selectImage"
          variant="outlined"
          label="Select Image"
          value={moodData.selectImage}
          onChange={fetchMoodData}
        />
      </form>
    </Paper>
  );
};

export default Form;

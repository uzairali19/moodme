import React, { useState } from 'react';
import {
  TextField,
  Typography,
  Autocomplete,
  Button,
  Box,
  Container,
} from '@mui/material';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createMood } from '../../redux/actions/moods';
// import useStyles from './styles';

const Form = () => {
  const [moodData, setMoodData] = useState({
    title: '',
    description: '',
    mood: '',
    selectImage: '',
  });

  const dispatch = useDispatch();
  //   const classes = useStyles();

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
      default:
        break;
    }
  };

  const moodsList = [
    'Cheerful',
    'Reflective',
    'Gloomy',
    'Humorous',
    'Melancholy',
    'Idyllic',
    'Whimsical',
    'Romantic',
    'Mysterious',
    'Ominous',
    'Calm',
    'Lighthearted',
    'Hopeful',
    'Angry',
    'Fearful',
    'Tense',
    'Lonely',
  ];

  const selectMood = (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={moodsList}
      sx={{ width: 300 }}
      value={moodData.mood}
      onChange={(e, v) => {
        setMoodData({ ...moodData, mood: v });
      }}
      renderInput={(params) => (
        <TextField {...params} label="Choose your Mood" />
      )}
    />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createMood(moodData));
  };

  const clear = () => {};

  console.log(moodData);

  return (
    <Box component="div">
      <Container fixed>
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
            fullWidth
          />
          <TextField
            name="description"
            variant="outlined"
            label="Description"
            value={moodData.description}
            onChange={fetchMoodData}
            fullWidth
          />
          {selectMood}
          <div>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) => {
                setMoodData({ ...moodData, selectImage: base64 });
              }}
              fullWidth
            />
          </div>
          <Button
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
            onClick={handleSubmit}
          >
            Send Mood
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            type="submit"
            onClick={clear}
            fullWidth
          >
            Clear Mood
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default Form;

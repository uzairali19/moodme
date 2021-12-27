import React, { useState, useEffect } from 'react';
import { TextField, Typography, Autocomplete, Button, Box, Container, CssBaseline } from '@mui/material';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createMood } from '../../redux/actions/moods';
import makeStyles from './styles';

const Form = () => {
  const [moodData, setMoodData] = useState({
    title: '',
    description: '',
    mood: '',
    selectImage: '',
  });

  const clear = () => {
    setMoodData({
      title: '',
      description: '',
      mood: '',
      selectImage: '',
    });
  };

  const dispatch = useDispatch();
  const classes = makeStyles();

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
      className={classes.inputDiv}
      disablePortal
      id="combo-box-demo"
      options={moodsList}
      sx={{ width: 300 }}
      value={moodData.mood}
      onChange={(e, v) => {
        setMoodData({ ...moodData, mood: v });
      }}
      renderInput={(params) => <TextField {...params} label="Choose Your Mood" />}
    />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createMood(moodData));
    clear();
  };

  return (
    <Box className={classes.box} component="div">
      <CssBaseline />
      <Container fixed>
        <form
          autoComplete="off"
          noValidate
          // className={classes.form}
          onSubmit={handleSubmit}
        >
          <Typography
            className={classes.heading}
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'block', sm: 'block' } }}
            align="center"
          >
            Create a mood
          </Typography>

          <TextField
            className={classes.inputDiv}
            name="title"
            variant="outlined"
            label="Mood Title"
            value={moodData.title}
            onChange={fetchMoodData}
            fullWidth
          />
          <TextField
            className={`${classes.inputDiv} ${classes.description}`}
            name="description"
            variant="outlined"
            label="Explain your mood...."
            value={moodData.description}
            onChange={fetchMoodData}
            fullWidth
          />
          {selectMood}
          <div className={classes.image}>
            <div>Upload Your Image</div>
            <FileBase
              id="fileSelector"
              type="file"
              multiple={false}
              onDone={({ base64 }) => {
                setMoodData({ ...moodData, selectImage: base64 });
              }}
              fullWidth
            />
          </div>
          <Button
            className={classes.send}
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            onClick={handleSubmit}
          >
            Send Mood
          </Button>
          <Button
            className={classes.clear}
            variant="contained"
            color="secondary"
            size="small"
            type="submit"
            onClick={clear}
          >
            Clear Mood
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default Form;

import { Container } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import Mood from './Mood/Mood';
import useStyles from './styles';

const Moods = ({ searchTerm }) => {
  const moods = useSelector((state) => state.moodsReducer);
  const classes = useStyles();
  return (
    <>
      <Container className={classes.container}>
        <div className={classes.moodLayout}>
          {moods
            .filter((mood) => {
              if (searchTerm === '') {
                return mood;
              } else if (mood.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                return mood;
              }
            })
            .map((mood) => {
              const moodId = mood._id;

              return (
                <div key={moodId} className={classes.mood}>
                  <Mood moodList={mood} />
                </div>
              );
            })}
        </div>
      </Container>
    </>
  );
};

export default Moods;

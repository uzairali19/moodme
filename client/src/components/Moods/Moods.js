import React from 'react';
import { useSelector } from 'react-redux';
import useStyles from './styles';

const Moods = () => {
  const moods = useSelector((state) => state.moodsReducer);

  console.log(moods);
  return (
    <>
      <h1>Moods</h1>
    </>
  );
};

export default Moods;

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMoods } from './redux/actions/moods';
import moods from './assets/images/Moods.png';
import Navbar from './Navbar';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoods());
  }, []);

  return (
    <>
      <Navbar />
    </>
  );
};

export default App;

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMoods } from './redux/actions/moods';
import Navbar from './Navbar';
import Moods from './components/Moods/Moods';
import Form from './components/Form/Form';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoods());
  }, []);

  return (
    <>
      <Navbar />
      <Moods />
      <Form />
    </>
  );
};

export default App;

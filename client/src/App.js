import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { getMoods } from './redux/actions/moods';
import Navbar from './Navbar';
import Moods from './components/Moods/Moods';
import Form from './components/Form/Form';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoods());
  }, [dispatch]);

  return (
    <>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Routes>
        <Route path="/" element={<Moods searchTerm={searchTerm} />} />
        <Route path="/create" element={<Form />} />
      </Routes>
    </>
  );
};

export default App;

import axios from 'axios';
import './App.css';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react'
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import TralerTest from './components/trailer/TralerTest';
import NotFound from './components/notFound/NotFound';


function App() {

  const [movies, setMovies] = useState();

  const getMovies = async () => {
    try {
      // const response = await axios.get("/api/v1/movies");
      const response = await api.get("/api/v1/movies");
      console.log(response.data);
      setMovies(response.data);
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home movies={movies} />} ></Route>
          <Route path="/Trailer/:ytTrailerId" element={<Trailer />} />
            <Route path="*" element = {<NotFound/>}></Route>
        </Route>
      </Routes>
    </div >
  );
}

export default App;

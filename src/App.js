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
import Reviews from './components/reviews/Reviews';


function App() {

  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([]);

  const getMovies = async () => {
    try {
      // const response = await axios.get("http://localhost:8080/api/v1/movies");
      const response = await api.get("/api/v1/movies");
      // const response = await axios.get(
      //   "https://moviestdapi-production.up.railway.app/api/v1/movies"
      // );
      console.log(response);
      setMovies(response.data);
    }
    catch (error) {
      console.log(error);
    }
  }

  const getMovieData = async (movieId) => {

    try {
      // const response = await api.get(`http://localhost:8080/api/v1/movies/${movieId}`);
      const response = await api.get(`/api/v1/movies/${movieId}`);
      // const response = await axios.get(
      //   `https://moviestdapi-production.up.railway.app/api/v1/movies/${movieId}`
      // );

      const singleMovie = response.data;

      setMovie(singleMovie);
      console.log(singleMovie);

      setReviews(singleMovie.reviewIds);


    }
    catch (error) {
      console.error(error);
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
          <Route path="/Reviews/:movieId" element={<Reviews getMovieData={getMovieData} movie={movie} reviews={reviews} setReviews={setReviews} />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </div >
  );
}

export default App;

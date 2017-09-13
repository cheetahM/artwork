/* eslint no-console: 0 */
const express = require("express");
const cors = require("cors");
const fs = require("fs");

const buffer = fs.readFileSync("./payload.json");
const moviesObj = JSON.parse(buffer);
const app = express();
app.use(cors());

const ratedShows = moviesObj.map(movie =>
    Object.assign({ rating: `${Math.floor(Math.random() * 9)}.${Math.floor(Math.random() * 9)}` }, movie)
  );
  
  // Search for a specific movie using movieId - provides JSON
  app.get('/details/:id', (req, res) => {
    const movie = moviesObj.find(movie => req.params
        .id === (movie.movieId).toString());

    if (movie) {
      console.log(movie.movieName);
      setTimeout(() => res.json(movie), Math.floor(Math.random() * 5000));
    } else {
      console.log(404, req.params.id);
      res.status(404).json({ error: 'movie not found' });
    }
  });


// Search for all movies - provides JSON
app.get("/api/movies", (req, res) => {
    return res.json(moviesObj, null, 4);
})

console.log(`Starting server on port 3000`);
app.listen(3000);
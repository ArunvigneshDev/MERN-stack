const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb+srv://2k22cse011:Arun1234@cluster0.88pk8u7.mongodb.net/topRatedMovies?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB Atlas');
    
  })
  .catch(err => {
    console.error('Error connecting to MongoDB Atlas:', err.message);
  });


// Movie Schema and Model
const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  director: String,
  rating: Number,
  poster: String,
  genre: String,
  cast: [String],
});

const Movie = mongoose.model('Movie', movieSchema);

// Routes

// Get all movies
app.get('/api/movies', async (req, res) => {
  try {
    const movies = await Movie.find({});
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new movie
app.post('/api/movies', async (req, res) => {
  const movie = new Movie(req.body);
  try {
    const newMovie = await movie.save();
    res.status(201).json(newMovie);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


const path = require('path');

// Serve HTML page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

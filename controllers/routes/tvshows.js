const tvshows = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { router } = require('.');


router.get('/tvshow/:id', (req, res) => {
    //1. api call to endpoint to get the movieData
    //2. fetch comments from db by using where movie_id === req.params.id and user_id===req.session.user_id
    // req.render("movie_page", {movieData, comments})
  });

const express = require('express');
const router = express.Router();
const api = require('../api');


router.get('/LatestAnimeAdded' , (req , res) =>{
  api.latestAnimeAdded()
    .then(animes =>{
      res.status(200).json({
        animes
      });
    }).catch((err) =>{
      console.error(err);
    });
});

router.get('/LatestEpisodesAdded' , (req , res) =>{
  api.latestEpisodesAdded()
    .then(episodes =>{
      res.status(200).json({
        episodes
      });
    }).catch((err) =>{
      console.error(err);
    });
});

router.get('/GetAnimeServers/:id([^/]+/[^/]+)' , (req , res) =>{
  let id = req.params.id;
  api.getAnimeServers(id)
    .then(servers =>{
      res.status(200).json({
        servers
      });
    }).catch((err) =>{
      console.error(err);
    });
});

router.get('/Genres/:genre/:order/:page' , (req , res) =>{
  let genre = req.params.genre;
  let order = req.params.order;
  let page = req.params.page;
  api.animeByGenres(genre, order , page)
    .then(animes =>{
      res.status(200).json({
        animes
      });
    }).catch((err) =>{
      console.error(err);
    });
});

router.get('/Movies/:order/:page' , (req , res) =>{
  let order = req.params.order;
  let page = req.params.page;
  api.movies(order , page)
    .then(movies =>{
      res.status(200).json({
        movies
      });
    }).catch((err) =>{
      console.error(err);
    });
});

router.get('/Special/:order/:page' , (req , res) =>{
  let order = req.params.order;
  let page = req.params.page;
  api.special(order , page)
    .then(special =>{
      res.status(200).json({
        special
      });
    }).catch((err) =>{
      console.error(err);
    });
});

router.get('/Ova/:order/:page' , (req , res) =>{
  let order = req.params.order;
  let page = req.params.page;
  api.ova(order , page)
    .then(ova =>{
      res.status(200).json({
        ova
      });
    }).catch((err) =>{
      console.error(err);
    });
});

router.get('/TV/:order/:page' , (req , res) =>{
  let order = req.params.order;
  let page = req.params.page;
  api.tv(order , page)
    .then(tv =>{
      res.status(200).json({
        tv
      });
    }).catch((err) =>{
      console.error(err);
    });
});

router.get('/AnimeByState/:state/:order/:page' , (req , res) =>{
  let state = req.params.state;
  let order = req.params.order;
  let page = req.params.page;
  api.animeByState(state , order , page)
    .then(animes =>{
      res.status(200).json({
        animes
      });
    }).catch((err) =>{
      console.error(err);
    });
});

module.exports = router;
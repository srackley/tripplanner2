const router = require('express').Router();
const Hotel = require('../models').Hotel;
const Restaurant = require('../models').Restaurant;
const Activity = require('../models').Activity;
const {Itinerary} = require('../models');

router.get('/itineraries/:id', (req, res, next) => {
  Itinerary.findById(req.params.id, {
    include: [{ all: true, nested: true }]
  }).then(results =>  res.json(results))
  .catch(next);
});

router.post('/itineraries', (req, res, next) => {
  Itinerary.create({}).then(itinerary =>
    Promise.all([itinerary.setHotels(req.body.hotels),
    itinerary.setRestaurants(req.body.restaurants),
    itinerary.setActivities(req.body.activities)]
  ))
  .then(results => console.log(results))
  .then(final => res.json(final))
});

router.get('/', (req, res, next) => {
  Promise.all([
    Hotel.findAll({ include: [{ all: true }] }),
    Restaurant.findAll({ include: [{ all: true }] }),
    Activity.findAll({ include: [{ all: true }] })
  ])
    .then(([hotels, restaurants, activities]) => {
      res.json({
        hotels,
        restaurants,
        activities
      });
    })
    .catch(next);
});


module.exports = router;

const db = require('./_db');

const Place = require('./place');
const Hotel = require('./hotel');
const Restaurant = require('./restaurant');
const Activity = require('./activity');
const Itinerary = require('./itinerary');

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);
Hotel.belongsToMany(Itinerary, {through: 'hotel_itinerary'});
Restaurant.belongsToMany(Itinerary, {through: 'restaurant_itinerary'});
Activity.belongsToMany(Itinerary, {through: 'activity_itinerary'});

module.exports = {
  db,
  Place,
  Hotel,
  Restaurant,
  Activity,
  Itinerary
};

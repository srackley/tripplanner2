const db = require('./_db');

const Place = require('./place');
const Hotel = require('./hotel');
const Restaurant = require('./restaurant');
const Activity = require('./activity');
const Itinerary = require('./itinerary');

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);
Itinerary.belongsToMany(Hotel, {through: 'hotel_itinerary'});
Itinerary.belongsToMany(Restaurant, {through: 'restaurant_itinerary'});
Itinerary.belongsToMany(Activity, {through: 'activity_itinerary'});

module.exports = {
  db,
  Place,
  Hotel,
  Restaurant,
  Activity,
  Itinerary
};


const fetchAttractions = () =>
  fetch('/api')
    .then(result => result.json())
    .catch(err => console.error(err));

const fetchItineraries = () => {
if (window.location.hash){
  const search = location.hash.substring(1);
  return fetch(`/api/itineraries/${search}`)
    .then(result => result.json())
    .catch(err => console.error(err));
  }
};
const createItinerary = (array) => {
  console.log('array: ', array);
  if (array.length){
  fetch('/api/itineraries', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({
      hotels: array.filter(el => el.catagory === 'hotels'),
      restaurants: array.filter(el => el.catagory === 'restaurants'),
      activities: array.filter(el => el.catagory === 'activities')
    })
  });
}
};


module.exports = {
  fetchAttractions, fetchItineraries, createItinerary
};


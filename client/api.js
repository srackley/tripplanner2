const hash = location.hash;

const fetchAttractions = () =>
  fetch('/api')
    .then(result => result.json())
    .catch(err => console.error(err));

const fetchItineraries = () =>
  fetch(`/api/itineraries/${hash}`)
    .then(result => {
      console.log('result', result);
      console.log('hash', hash);
    })
    .catch(err => console.error(err));

module.exports = {
  fetchAttractions, fetchItineraries
};

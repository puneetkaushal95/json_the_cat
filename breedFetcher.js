const input = process.argv.slice(2);
const request = require('request');
const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + input;

const fetchBreedDescription = function (breedName, callback) {
request(url, (error, response, body) => {
  const data = JSON.parse(body);
  breedName = data[0]
  if (error) {
    callback('error', null)
  } else if (breedName == null) {
    console.log('error')
  } else {
    callback(null, breedName.description);
   }
});
};

module.exports = {fetchBreedDescription};

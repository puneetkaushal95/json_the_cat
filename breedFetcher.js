const fs = require('fs');
const request = require('request');
const url = 'https://api.thecatapi.com/v1/breeds/search?q=sib';

request(url, (error, response, body) => {
  
  try{
    let json = JSON.parse(body);   
    
    console.log(json[0].description);
  } catch {
    console.log(error);
  }

  
});

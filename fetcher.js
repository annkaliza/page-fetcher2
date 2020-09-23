const data = process.argv
const request = require('request');
const fs = require('fs');

const url = data [2];
const path= data [3];

request(url, (error, response, body) => {
  if (error){
  console.log('error:', error); 
  }

  fs.writeFile(path, body, function(err, data){
    if(err){
      console.log('error:', err); 
    }else {
    console.log(data)
    }

  });
});


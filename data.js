const es = require('elasticsearch');
const cities = require('./cities.json');

const client = new es.Client({
  host: ['localhost:9200']
});

var bulk = [];

cities.forEach(city =>{
  bulk.push({
    index:{ 
      _index:"scotch.io-tutorial", 
      _type:"cities_list",
    }          
  });
  bulk.push(city)
});


client.ping({
  requestTimeout:30000 
}, function(error) {
  if(error) {
    console.log('Server is down');  
  } else {
    console.log('Server is running');
  }
});

// create a new index called scotch.io-tutorial. If the index has already been created, this function fails safely
client.indices.create({
      index: 'scotch.io-tutorial'
  }, function(error, response, status) {
      if (error) {
          console.log(error);
      } else {
          console.log("created a new index", response);
      }
});

// add a data to the index that has already been created
client.index({
     index: 'scotch.io-tutorial',
     id: '1',
     type: 'cities_list',
     body: {
         "Key1": "Content for key one",
         "Key2": "Content for key two",
         "key3": "Content for key three",
     }
 }, function(err, resp, status) {
     console.log(resp);
 });

 client.bulk({ body: bulk }, function (err) { 
  if(err) { 
    console.log("Failed Bulk operation".red, err) 
  } else { 
    console.log("Successfully imported %s".green, cities.length); 
  } 
}); 

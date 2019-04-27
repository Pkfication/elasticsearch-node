const cities = require('./cities.json');
const client = require('./config').client;

var bulk = [];

cities.forEach(city =>{
  bulk.push({
    index:{ 
      _index:"cities", 
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

client.indices.create({
      index: 'cities'
  }, function(error, response, status) {
      if (error) {
          console.log(error);
      } else {
          console.log("created a new index", response);
      }
});

// For deleting an index
// client.indices.delete({
//   index: 'scotch.io-tutorial'
// }, function(error, response, status) {
//   if (error) {
//       console.log(error);
//   } else {
//       console.log("DELETED the index", response);
//   }
// });

 client.bulk({ body: bulk }, function (err) { 
  if(err) { 
    console.log("Failed Bulk operation".red, err) 
  } else { 
    console.log("Successfully imported", cities.length); 
  } 
}); 

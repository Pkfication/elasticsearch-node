# Searching over 100k cities using elastic search

An app that uses elastic search to search over 100k ciites within 50ms.

# REQUIREMENT

- ELASTICSEARCH@2.4, if you are on a mac it can be installed using brew from [here](https://medium.com/@felixgondwe/elasticsearch-setup-using-homebrew-2017891f62bb) .
- Express
- Node
- npm
- Postman (To test the APIs)

# SETTING UP

- Clone the repository, and install the dependencies using `npm install`.
- Run the elasticsearch server and then start the app using `node index`. If everything works fine you'll get a message `Server running!`.
- Create the index using the `data.js` file, by running it once.
- Run the server and hit it using postman `localhost:3001/search/q=delhi`


 

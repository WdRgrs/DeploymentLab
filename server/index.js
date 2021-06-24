const express = require('express')      //requires express in order to be used
const app = express();      //invokes express npm

const path = require('path');       //comes from node

app.get('/', function(req, res) {

    res.sendFile( path.join(__dirname, '../index.html') )     //built in res method that will send a file     --      path.join joins the path with your file
})                                                                  //first argument always __dirname, 2nd argument is the path to get to the html file



const port = process.env.PORT || 5050;      //will choose to go to the domain or be locally hosted on 5050 if the first argument fails

app.listen(port, function() {
    console.log(`Server is hosted on ${port}`)
})

//http://localhost:5050 - the path to get to the main page
//in the Json file:
//"start": "node server/index.js", //added to tell node what to do 
//"main": "server/index.js",  //changed to refelct the location of the index.js file (added server/)
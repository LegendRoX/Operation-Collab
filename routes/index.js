// Require express
const express = require('express');
const path = require('path');
const testPlugins = require('../data/jsPlugins');
const router = express.Router()

router.use('/data', express.static(path.join(__dirname, '../data')));

// Debug logging
router.use((req, res, next) => {
  console.log('Request URL:', req.originalUrl);
  next();
});


// Define a route
router.get('/', function(req, res,next) {
  //res.send('Hello from Express!');
  res.render(
              "index",
              {
              title: "Bajrang Dal  -- JAY SHREE RAM", 
              }
            )
});

router.get("/search/results", async(req,res, next)=> {
  const pName = req.query
  const searchResults = arrayObjectIndexOf(testPlugins, pName, 'name')
  res.render(
    "searchPlugins",
    {
      title: "Plugin Results",
      results: searchResults
    }
  )
})

//Building an asynchronous function to fetch searchResults

async function searchPlugins(name){
  if(name === testPlugins.name)
  {
    let index = testPlugins.indexOf(name)
  }
  else{
    res.send("No matches for " + name + " were found.")
  }
  let position = testPlugins[index]
  return position;
}
function arrayObjectIndexOf(myArray, searchTerm, property) {
  for(var i = 0, len = myArray.length; i < len; i++) {
      if (myArray[i][property] === searchTerm) return i;
  }
  return -1;
}


module.exports = router
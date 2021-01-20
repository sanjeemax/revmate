var express = require('express');
var router = express.Router();
var graph = require('fbgraph');

var access_token = 'EAAGAouTTiRcBAPyTgB3QGbgajW1bAsDyEldG0VOcvunYQYDpPQ35DdjdFomLqDEZATBLNRNtdpCxPXTi2U92fCXrHplx9ZA2gx7yLW8gt5QIM5CCarZBBGFHOLwwiZBZBn09iK5fZAV33kuz6Xfnb7ZB3WJgxnBXYIakvA6WncjvBxr0ZCcZBwRNZBL3IA8ny6xYuC72GQUcO46AahJ4ifyz0FwfY0IYjWBaWXboZCmQB6erQZDZD';

router.get('/', function(req, res, next) 
{
 try
 {
  console.log(req.query);
  graph.setAccessToken(access_token);//req.query.accessToken);
  
  graph.get("104421098195704_105616368076177/?fields=likes.summary(true)", function(err, data)
   {
     if(err)
     { 
      console.log(err);
      //res.json(402, err);
      res.status(401).json(err);
     }
     console.log("FB: " + data);
     //res.json(201, data.data);
     res.status(201).json(data);
   });
 }
 catch(e)
 {
   console.log("Error: " + e);
 }
 //next();
});


// PUT method route
router.put('/', function (req, res) {
  res.send('PUT request to the homepage')
})


module.exports = router;
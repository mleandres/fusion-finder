const express = require('express');
const app = express();

const spotify = require('./services/spotify');

require('./routes/songRoutes')(app);



if (process.env.NODE_ENV === 'production') {
  // need express to serve static client 
  app.use(express.static('client/build'));

  const path = require('path');
  // catch all path to redirect to client application in prod
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
};

const PORT = process.env.PORT || 5000;
app.listen(PORT);

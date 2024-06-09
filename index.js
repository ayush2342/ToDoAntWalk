const express = require('express');
const bodyParser = require('body-parser');
const passport = require('./config/passport-jwt-strategy');
const routes = require('./routes');
const port = process.env.PORT || 8000;

const app = express();

app.use(passport.initialize());
app.use(bodyParser.json());
app.use(routes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(port, (error) => {
  if (error) {
    console.error(`Error in running the server: ${error}`);
    return;
  }
  console.log(`Server is running on port: ${port}`);
});

const express = require("express");
const app = express(); ///this creates a new express server
const db = require('./config/keys').mongoURI;
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const expressGraphQL = require("express-graphql");
const User = require("./models/user");
const schema = require("./schema/schema");
app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true
  })
);
app.use(bodyParser.json()); //This middleware will parse incoming JSON requests,
// fail descriptively, and make form data available in req.body.
app.listen(5000, () => {
  console.log('Server is running on port 5000')
});

mongoose
  .connect(db, {useNewUrlParser: true})
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));


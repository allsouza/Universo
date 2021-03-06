const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const users = require("./routes/api/users");
const email = require('./routes/api/email');

const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

const db = require('./config/keys').mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use('/api/email', email);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on Port ${port}`));
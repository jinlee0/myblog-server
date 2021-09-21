const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const connect = require('./schemas');

const app = express();
app.set('port', process.env.PORT || 3002);
app.use(cors());
connect();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.status(err.status || 500);
  res.render('error');
  console.log(next);
})

app.use('/user', require('./routes/user'));
app.use('/resume', require('./routes/resume'));

app.listen(app.get('port'), () => {
  console.log(`listening at ${app.get('port')}`);
})

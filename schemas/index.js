const mongoose = require('mongoose');

const connect = () => {
  if (process.env.NODE_ENV !== 'production') {
    mongoose.set('debug', true);
  }
  mongoose.connect(process.env.DB_ADDRESS, {
    dbName: process.env.DB_NAME,
    useNewUrlParser: true,
  }, (error) => {
    if (error) {
      console.log('mongodb error', error);
    } else {
      console.log('DB connected');
    }
  });
};
mongoose.connection.on('error', (error) => {
  console.error('mongodb connection error', error);
});
mongoose.connection.on('disconnected', () => {
  console.error('mongodb disconnected, try again');
  connect();
})

module.exports = connect;
const path = require('path');
const Sequelize = require('sequelize');

// get this modules current working directory
// and workout relative path from this file
const pwd = path.dirname(__dirname);
const dbPath = path.join(pwd, '..', 'db', 'kumara.db');

const sequelize = new Sequelize(dbPath, null, null, {
  host: 'localhost',
  dialect: 'sqlite',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  storage: dbPath,
  logging: false,
});

// test connection
sequelize
  .authenticate()
  .then(() => {
    console.log('\t-= Database connection established successfully =-\n\n');
  })
  .catch(err => {
    console.error('\tUnable to connect to the database:', err);
  });

const Review = sequelize.import('./models/review');
Review.sync();

module.exports = {
  sequelize,
  Review,
};

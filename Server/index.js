import express from 'express';
import connectDB from './utils/db.js';
import Log from './models/log.js'; 
const app = express();

connectDB().then(() => {
  
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}).catch(error => {
  console.error('Failed to connect to the database:', error);
});


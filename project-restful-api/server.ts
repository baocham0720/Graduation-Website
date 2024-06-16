//import dotenv from 'dotenv';
import app from './src/app';
import mongoose from 'mongoose'
import globalConfig from './src/constants/config'
//dotenv.config();

const PORT = globalConfig.PORT || 9000;

/// Start the server
const mongooseDbOptions = {
    autoIndex: true, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4, // Use IPv4, skip trying IPv6
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  mongoose
    .connect(globalConfig.MOGODB_CONNECTION_STRING as string, mongooseDbOptions)
    .then(() => {
        console.log("⚡️[MongoDB]: Connected to MongoDB");
      //should listen app here
      app.listen(PORT, () => {
        console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
    });
    })
    .catch((err) => {
      console.error('Failed to Connect to MongoDB', err);
    });


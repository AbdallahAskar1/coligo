import { connect } from 'mongoose';


let dbConnection = null;

export const connectToDatabase = async () => {
  if (!dbConnection) {
    try {
      const connection = await connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      dbConnection = connection;
      console.log('connected to mongodb');
    } catch (error) {
      console.error('mongodb connection error:', error);
    }
  }
  return dbConnection;
};


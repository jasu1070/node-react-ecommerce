import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT || 5001,
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb+srv://jashvant812:JKPARAMAR@cluster0.eudcmc5.mongodb.net/myStore?appName=Cluster0',
  JWT_SECRET: process.env.JWT_SECRET || '123456789abcdefg',
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'sb',
  accessKeyId: process.env.accessKeyId || 'accessKeyId',
  secretAccessKey: process.env.secretAccessKey || 'secretAccessKey',
};

export const {
  PORT = 5000,
  NODE_ENV = 'development',
  MONGO_URI = 
  'mongodb+srv://test_user_17:test_password17@cluster0.4wywr.mongodb.net/test-rtc?retryWrites=true&w=majority',
  SESS_NAME = 'sid',
  SESS_SECRET = 'secret!session',
  SESS_LIFETIME = 1000 * 60 * 60 * 2
} = process.env;
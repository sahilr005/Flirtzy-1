module.exports = {
  //server database
  MONGODB_USERNAME: "", // YOUR_MONGODB_USERNAME
  MONGODB_PASSWORD: "", // YOUR_MONGODB_PASSWORD
  MONGODB_DB_NAME: "", // YOUR_DATABASE_NAME

  //port
  PORT: process.env.PORT || 5000,

  //secret key for API
  SECRET_KEY: "", // YOUR_APP_SECRET_KEY

  //gmail credentials for send email
  EMAIL: "", // YOUR_APP_EMAIL
  PASSWORD: "", // YOUR_APP_PASSWORD

  //secret key for jwt
  JWT_SECRET: "", // ANY_RANDOM_KEY

  baseURL: "", // YOUR_APP_BASE_URL

  //firebase server key for notification
  SERVER_KEY: "AIzaSyB-zf71Mo_-gSfZ8lrbN9JY3M5ZmJDy-7k", // YOUR_FIREBASE_SERVER_KEY
};

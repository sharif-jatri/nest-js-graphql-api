export const config = () => ({
  MONGODB_URI: process.env.MONGODB_URI,
  JWT: {
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
    ACCESS_TOKEN_VALIDITY: process.env.ACCESS_TOKEN_VALIDITY,
    REFRESH_TOKEN_VALIDITY: process.env.REFRESH_TOKEN_VALIDITY
  }
});

const jwt = require("jsonwebtoken");
const SECRET_KEY = "ashwin";

const createNewToken = (payload) => {
  return jwt.sign({ userId: payload }, process.env.SECRET_KEY || SECRET_KEY, {
    expiresIn: "10d",
  });
};

module.exports = { createNewToken };

const mongoose = require("mongoose");

const verifyToken = (token) => {
  /* eslint-disable */
  const jwtPattern = /^[A-Za-z0-9-_=]+.[A-Za-z0-9-_=]+.?[A-Za-z0-9-_.+/=]*$/; // eslint-disable-line no-use-before-define
  /* eslint-enable */

  if (jwtPattern.test(token)) {
    return true;
  } else {
    return false;
  }
};

const verifyID = async (...mongoId) => {
  let verification;
  await mongoId.forEach(id, () => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      verification = false;
    } else {
      verification = true;
    }
  });
  return verification;
};

module.exports = { verifyToken, verifyID };

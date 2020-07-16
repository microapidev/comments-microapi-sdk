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

const verifyID = (...mongoId) => {
  let verification;
 mongoId.forEach((id) => {
    if (id.length !== 24) {
      verification = false;
    } else {
      verification = true;
    }
  });
  return verification;
};

module.exports = { verifyToken, verifyID };

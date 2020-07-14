const verifyToken = (token) => {
  /* eslint-disable */
  const jwtPattern = /^[A-Za-z0-9-_=]+.[A-Za-z0-9-_=]+.?[A-Za-z0-9-_.+/=]*$/; // eslint-disable-line no-use-before-define
  /* eslint-enable */

  if (jwtPattern.test(token) === true) {
    return true;
  } else {
    return false;
  }
};

module.exports = verifyToken;

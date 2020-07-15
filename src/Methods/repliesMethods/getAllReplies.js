const rp = require('request-promise');

const getAllReplies = async (token, pageQuery) => {
  var options = {
    uri: `https://comment.microapi.dev/v1/comments`,
    headers: {
      'User-Agent': 'Request-Promise',
      Authorization: `Bearer ${token}`,
    },
    query: pageQuery,
    method: 'GET',
    json: true, // Automatically parses the JSON string in the response
  };

  try {
    const getRepliesResponse = await rp(options);
    return getRepliesResponse;
  } catch (error) {
    return error.message;
  }
};
module.exports = getAllReplies;

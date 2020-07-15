const rp = require('request-promise');
require('dotenv').config();

const getCommentVotes = async (token, commentId) => {
  var options = {
    uri: `${process.env.BaseUrl}/v1/comments/${commentId}/votes`,
    headers: {
      'User-Agent': 'Request-Promise',
      Authorization: `Bearer ${token}`,
    },
    method: 'GET',
    json: true, // Automatically parses the JSON string in the response
  };

  try {
    const getVoteResponse = await rp(options);
    return getVoteResponse;
  } catch (error) {
    return error.message;
  }
};

module.exports = getCommentVotes;

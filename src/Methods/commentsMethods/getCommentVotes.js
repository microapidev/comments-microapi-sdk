const rp = require('request-promise');

const getCommentVotes = async (params, commentId) => {
  var options = {
    uri: `https://comment.microapi.dev/v1/comments/${commentId}/votes`,
    headers: {
      'User-Agent': 'Request-Promise',
      Authorization: `Bearer ${params.appToken}`,
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

const rp = require('request-promise');

const getReplyVotes = async (params, commentId, replyId) => {
  var options = {
    uri: `https://comment.microapi.dev/v1/comments/${commentId}/replies/${replyId}/votes`,
    headers: {
      'User-Agent': 'Request-Promise',
      Authorization: `Bearer ${params.appToken}`,
    },
    method: 'GET',
    json: true, // Automatically parses the JSON string in the response
  };

  try {
    const getReplyVoteResponse = await rp(options);
    return getReplyVoteResponse;
  } catch (error) {
    return error.message;
  }
};
module.exports =getReplyVotes;

const rp = require('./node_modules/request-promise');

const getReplyVotes = async (token, commentId, replyId) => {
  var options = {
    uri: `https://comments-microservice.herokuapp.com/v1/comments/${commentId}/replies/${replyId}/votes`,
    headers: {
      'User-Agent': 'Request-Promise',
      Authorization: `Bearer ${token}`,
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

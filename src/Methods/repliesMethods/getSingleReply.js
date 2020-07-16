const rp = require('./node_modules/request-promise');

const getSingleReply = async (token, commentId, replyId) => {
  var options = {
    uri: `https://comments-microservice.herokuapp.com/v1/comments/${commentId}/replies/${replyId}`,
    headers: {
      'User-Agent': 'Request-Promise',
      Authorization: `Bearer ${token}`,
    },
    method: 'GET',
    json: true, // Automatically parses the JSON string in the response
  };

  try {
    const getSingleReplyResponse = await rp(options);
    return getSingleReplyResponse;
  } catch (error) {
    return error.message;
  }
};

module.exports =getSingleReply;

const rp = require('request-promise');

const deleteSingleReply = async (token, commentId, replyId, ownerId) => { 
  if (!ownerId) {
    return `Owner ID must not be empty!`;
  }
  var options = {
    uri: `https://comments-microservice.herokuapp.com/v1/comments/${commentId}/replies/${replyId}`,
    headers: {
      'User-Agent': 'Request-Promise',
      Authorization: `Bearer ${token}`,
    },
    method: 'DELETE',
    body: {
      ownerId: ownerId,
    },
    json: true, // Automatically parses the JSON string in the response
  };

  try {
    const deleteReplyResponse = await rp(options);
    return deleteReplyResponse;
  } catch (error) {
    return error.message;
  }
};

module.exports = deleteSingleReply;

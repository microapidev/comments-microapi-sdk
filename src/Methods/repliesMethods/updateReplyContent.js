const rp = require('request-promise');

const updateReplyContent = async (token, commentId, replyId, updateObject) => {
  var options = {
    uri: `https://comments-microservice.herokuapp.com/v1/comments/${commentId}/replies/${replyId}`,
    headers: {
      'User-Agent': 'Request-Promise',
      Authorization: `Bearer ${token}`,
    },
    method: 'PATCH',
    body: {
      ownerId: updateObject.userId,
      content: updateObject.content,
    },
    json: true, // Automatically parses the JSON string in the response
  };

  try {
    const updateReplyResponse = await rp(options);
    return updateReplyResponse;
  } catch (error) {
    return error.message;
  }
};

module.exports = updateReplyContent;

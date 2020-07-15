const rp = require('request-promise');
require('dotenv').config();

const deleteSingleReply = async (token, commentId, replyId, userId) => {
  if (!userId) {
    return `User ID must not be empty!`;
  }
  var options = {
    uri: `${process.env.BaseUrl}/v1/comments/${commentId}/replies/${replyId}`,
    headers: {
      'User-Agent': 'Request-Promise',
      Authorization: `Bearer ${token}`,
    },
    method: 'DELETE',
    body: {
      ownerId: userId,
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

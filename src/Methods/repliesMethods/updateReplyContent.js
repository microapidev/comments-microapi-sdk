const rp = require('request-promise');
require('dotenv').config();

const updateReplyContent = async (
  token,
  commentId,
  replyId,
  updateObject
) => {

  if (!updateObject.userId && !updateObject.content) {
    return 'UserId and Comment Update Content must no be empty';
  }

  var options = {
    uri: `${process.env.BaseUrl}/v1/comments/${commentId}/replies/${replyId}`,
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

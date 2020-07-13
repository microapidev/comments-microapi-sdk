const rp = require('request-promise');

const deleteSingleReply = async (params, commentId, replyId) => {
  var options = {
    uri: `https://comment.microapi.dev/v1/comments/${commentId}/replies/${replyId}`,
    headers: {
      'User-Agent': 'Request-Promise',
      Authorization: `Bearer ${params.appToken}`,
    },
    method: 'DELETE',
    body: {
      ownerId: params.ownerId,
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

export default deleteSingleReply;

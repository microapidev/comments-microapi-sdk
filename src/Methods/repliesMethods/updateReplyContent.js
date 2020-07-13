const rp = require('request-promise');

const updateReplyContent = async (params, commentId, replyId, content) => {
  var options = {
    uri: `https://comment.microapi.dev/v1/comments/${commentId}/replies/${replyId}`,
    headers: {
      'User-Agent': 'Request-Promise',
      Authorization: `Bearer ${params.appToken}`,
    },
    method: 'PATCH',
    body: {
      ownerId: params.ownerId,
      content: content,
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

export default updateReplyContent;

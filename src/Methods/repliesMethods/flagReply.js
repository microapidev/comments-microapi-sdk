const rp = require('request-promise');

const flagComment = async (params, commentId, replyId) => {
  var options = {
    uri: `https://comment.microapi.dev/v1/comments/${commentId}/replies/${replyId}/flag`,
    headers: {
      'User-Agent': 'Request-Promise',
      Authorization: `Bearer ${params.appToken}`,
    },
    method: 'PATCH',
    body: {
      ownerId: params.ownerId,
    },
    json: true, // Automatically parses the JSON string in the response
  };

  try {
    const flagReplyResponse = await rp(options);
    return flagReplyResponse;
  } catch (error) {
    return error.message;
  }
};

export default flagReply;

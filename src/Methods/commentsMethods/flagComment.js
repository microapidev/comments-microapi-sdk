const rp = require('request-promise');

const flagComment = async (token, commentId, ownerId) => {
  if (!ownerId) {
    return `Owner ID must not be empty!`;
  }
  var options = {
    uri: `https://comments-microservice.herokuapp.com/v1/comments/${commentId}/flag`,
    headers: {
      'User-Agent': 'Request-Promise',
      Authorization: `Bearer ${token}`,
    },
    method: 'PATCH',
    body: {
      ownerId: ownerId,
    },
    json: true, // Automatically parses the JSON string in the response
  };

  try {
    const flagResponse = await rp(options);
    return flagResponse;
  } catch (error) {
    return error.message;
  }
};
module.exports = flagComment;

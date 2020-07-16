const rp = require('request-promise');

const updateCommentContent = async (token, commentId, updateObject) => {
  if (!updateObject.ownerId && !updateObject.content) {
    return 'ownerId and Comment Update Content must no be empty';
  }
  var options = {
    uri: `https://comments-microservice.herokuapp.com/v1/comments/${commentId}`,
    headers: {
      'User-Agent': 'Request-Promise',
      Authorization: `Bearer ${token}`,
    },
    method: 'PATCH',
    body: {
      ownerId: updateObject.ownerId,
      content: updateObject.content,
    },
    json: true, // Automatically parses the JSON string in the response
  };

  try {
    const updateResponse = await rp(options);
    return updateResponse;
  } catch (error) {
    return error.message;
  }
};

module.exports = updateCommentContent;

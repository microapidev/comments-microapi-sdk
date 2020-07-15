const comments = require('../Methods/commentsMethods');
const replies = require('../Methods/repliesMethods');
const verifyToken = require('../utils/validation');

class CommentSDK {
  constructor(applicationToken) {
    this.applicationToken = applicationToken;
    this.appToken = "";
  }

  //init method
  init() {
    console.log(verifyToken(this.applicationToken));
    if (verifyToken(this.applicationToken) === true) {
      this.appToken = this.applicationToken;
    } else {
      return 'Invalid Token Provided';
    }
  }
  //comments methods
  async createComment(commentObject) {
    return comments.createComment(this.appToken, commentObject);
  }
  async getAllComments(pageNumber) {
    return comments.getAllComments(this.params, pageNumber);
  }
  async getSingleComment(commentId) {
    return comments.getSingleComment(this.params, commentId);
  }
  async updateCommentContent(commentId, content) {
    return comments.updateCommentContent(this.params, commentId, content);
  }
  async deleteSingleComment(commentId) {
    return comments.deleteSingleComment(this.params, commentId);
  }
  async flagComment(commentId) {
    return comments.flagComment(this.params, commentId);
  }
  async getCommentVotes(commentId) {
    return comments.getCommentVotes(this.params, commentId);
  }
  async upvoteSingleComment(commentId) {
    return comments.upvoteSingleComment(this.params, commentId);
  }
  async downVoteSingleComment(commentId) {
    return comments.downVoteSingleComment(this.params, commentId);
  }

  //replies methods
  async createReply(commentId, content) {
    return replies.createReply(this.params, commentId, content);
  }
  async getAllReplies(commentId, pageNumber) {
    return replies.getAllReplies(this.params, commentId, pageNumber);
  }
  async getSingleReply(commentId, replyId) {
    return replies.getSingleReply(this.params, commentId, replyId);
  }
  async updateReplyContent(commentId, replyId, content) {
    return replies.updateReplyContent(this.params, commentId, replyId, content);
  }
  async deleteSingleReply(commentId, replyId) {
    return replies.deleteSingleReply(this.params, commentId, replyId);
  }
  async flagReply(commentId, replyId) {
    return replies.flagReply(this.params, commentId, replyId);
  }
  async getReplyVotes(commentId, replyId) {
    return replies.getReplyVotes(this.params, commentId, replyId);
  }
  async upvoteSingleReply(commentId, replyId) {
    return replies.upvoteSingleReply(this.params, commentId, replyId);
  }
  async downVoteSingleReply(commentId, replyId) {
    return replies.downVoteSingleReply(this.params, commentId, replyId);
  }
}

// const commentsSDK = new CommentSDK(_props);
// export default commentsSDK;
module.exports = CommentSDK;

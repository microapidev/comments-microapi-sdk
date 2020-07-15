const comments = require('../methods/commentsMethods');
const replies = require('../methods/repliesMethods');
const { verifyToken, verifyID } = require('../utils/validation');

class CommentSDK {
  constructor(applicationToken) {
    this.applicationToken = applicationToken;
    this.appToken = '';
  }

  //init method
  init() {
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
  async getAllComments(pageQuery) {
    return comments.getAllComments(this.appToken, pageQuery);
  }
  async getSingleComment(commentId) {
    if (!verifyID(commentId)) {
      return `Invalid Comment ID Provided`;
    }
    return comments.getSingleComment(this.appToken, commentId);
  }
  async updateCommentContent(commentId, updateObject) {
    if (!verifyID(commentId)) {
      return `Invalid Comment ID Provided`;
    }
    return comments.updateCommentContent(
      this.appToken,
      commentId,
      updateObject
    );
  }
  async deleteSingleComment(commentId, userId) {
    if (!verifyID(commentId)) {
      return `Invalid Comment ID Provided`;
    }
    return comments.deleteSingleComment(this.appToken, commentId, userId);
  }
  async flagComment(commentId, userId) {
    if (!verifyID(commentId)) {
      return `Invalid Comment ID Provided`;
    }
    return comments.flagComment(this.appToken, commentId, userId);
  }
  async getCommentVotes(commentId) {
    if (!verifyID(commentId)) {
      return `Invalid Comment ID Provided`;
    }
    return comments.getCommentVotes(this.appToken, commentId);
  }
  async upvoteSingleComment(commentId, userId) {
    if (!verifyID(commentId)) {
      return `Invalid Comment ID Provided`;
    }
    return comments.upvoteSingleComment(this.appToken, commentId, userId);
  }
  async downVoteSingleComment(commentId, userId) {
    if (!verifyID(commentId)) {
      return `Invalid Comment ID Provided`;
    }
    return comments.downVoteSingleComment(this.appToken, commentId, userId);
  }

  //replies methods
  async createReply(commentId, replyObject) {
    if (!verifyID(commentId)) {
      return `Invalid Comment ID Provided`;
    }
    return replies.createReply(this.appToken, commentId, replyObject);
  }
  async getAllReplies(commentId, pageQuery) {
    if (!verifyID(commentId)) {
      return `Invalid Comment ID Provided`;
    }
    return replies.getAllReplies(this.appToken, commentId, pageQuery);
  }
  async getSingleReply(commentId, replyId) {
    if (!verifyID(commentId, replyId)) {
      return `Invalid Comment ID or Reply ID Provided`;
    }
    return replies.getSingleReply(this.appToken, commentId, replyId);
  }
  async updateReplyContent(commentId, replyId, updateReplyObject) {
    if (!verifyID(commentId, replyId)) {
      return `Invalid Comment ID or Reply ID Provided`;
    }
    return replies.updateReplyContent(
      this.appToken,
      commentId,
      replyId,
      updateReplyObject
    );
  }
  async deleteSingleReply(commentId, replyId) {
    if (!verifyID(commentId, replyId)) {
      return `Invalid Comment ID or Reply ID Provided`;
    }
    return replies.deleteSingleReply(this.appToken, commentId, replyId);
  }
  async flagReply(commentId, replyId, userId) {
    if (!verifyID(commentId, replyId)) {
      return `Invalid Comment ID or Reply ID Provided`;
    }
    return replies.flagReply(this.appToken, commentId, replyId, userId);
  }
  async getReplyVotes(commentId, replyId) {
    if (!verifyID(commentId, replyId)) {
      return `Invalid Comment ID or Reply ID Provided`;
    }
    return replies.getReplyVotes(this.appToken, commentId, replyId);
  }
  async upvoteSingleReply(commentId, replyId, userId) {
    if (!verifyID(commentId, replyId)) {
      return `Invalid Comment ID or Reply ID Provided`;
    }
    return replies.upvoteSingleReply(this.appToken, commentId, replyId, userId);
  }
  async downVoteSingleReply(commentId, replyId, userId) {
    if (!verifyID(commentId, replyId)) {
      return `Invalid Comment ID or Reply ID Provided`;
    }
    return replies.downVoteSingleReply(
      this.appToken,
      commentId,
      replyId,
      userId
    );
  }
}

// const commentsSDK = new CommentSDK(_props);
// export default commentsSDK;
module.exports = CommentSDK;

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
    if (verifyToken(this.applicationToken)) {
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
  async deleteSingleComment(commentId, ownerId) {
    if (!verifyID(commentId)) {
      return `Invalid Comment ID Provided`;
    }
    return comments.deleteSingleComment(this.appToken, commentId, ownerId);
  }
  async flagComment(commentId, ownerId) {
    if (!verifyID(commentId)) {
      return `Invalid Comment ID Provided`;
    }
    return comments.flagComment(this.appToken, commentId, ownerId);
  }
  async getCommentVotes(commentId) {
    if (!verifyID(commentId)) {
      return `Invalid Comment ID Provided`;
    }
    return comments.getCommentVotes(this.appToken, commentId);
  }
  async upvoteSingleComment(commentId, ownerId) {
    if (!verifyID(commentId)) {
      return `Invalid Comment ID Provided`;
    }
    return comments.upvoteSingleComment(this.appToken, commentId, ownerId);
  }
  async downvoteSingleComment(commentId, ownerId) {
    if (!verifyID(commentId)) {
      return `Invalid Comment ID Provided`;
    }
    return comments.downvoteSingleComment(this.appToken, commentId, ownerId);
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
  async flagReply(commentId, replyId, ownerId) {
    if (!verifyID(commentId, replyId)) {
      return `Invalid Comment ID or Reply ID Provided`;
    }
    return replies.flagReply(this.appToken, commentId, replyId, ownerId);
  }
  async getReplyVotes(commentId, replyId) {
    if (!verifyID(commentId, replyId)) {
      return `Invalid Comment ID or Reply ID Provided`;
    }
    return replies.getReplyVotes(this.appToken, commentId, replyId);
  }
  async upvoteSingleReply(commentId, replyId, ownerId) {
    if (!verifyID(commentId, replyId)) {
      return `Invalid Comment ID or Reply ID Provided`;
    }
    return replies.upvoteSingleReply(this.appToken, commentId, replyId, ownerId);
  }
  async downvoteSingleReply(commentId, replyId, ownerId) {
    if (!verifyID(commentId, replyId)) {
      return `Invalid Comment ID or Reply ID Provided`;
    }
    return replies.downvoteSingleReply(
      this.appToken,
      commentId,
      replyId,
      ownerId
    );
  }
}

// const commentsSDK = new CommentSDK(_props);
// export default commentsSDK;
module.exports = CommentSDK;

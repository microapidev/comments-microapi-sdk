import comments from '../Methods/commentsMethods';
import replies from '../Methods/repliesMethods';

// const _PROPS ={
//     appToken: null,
//     serviceUrl: "https://comment.microapi.dev/v1",

// }
class CommentSDK {
  constructor(applicationToken, userId, pageId = '', origin = '') {
    this.applicationToken = applicationToken;
    this.userId = userId;
    this.pageId = pageId;
    this.origin = origin;
    this.params = {};
  }
  /**
   *
   * @param {*} initParams
   * initParams - object containing paramaters for initializing the service
   */
  init() {
    // application token from the init params
    this.params.appToken = this.applicationToken;
    this.params.ownerId = this.userId;
    this.params.refId = this.pageId;
    this.params.origin = this.origin;
  }
  //comments methods
  async createComment(content) {
    return comments.createComment(this.params, content);
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

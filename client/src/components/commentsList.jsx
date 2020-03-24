import React from 'react';
import CommentsEntry from './commentsEntry.jsx';
import commentsIcon from '../images/comments-icon.png';

const CommentsList = ({ comments, addReply }) => (
  <div className="CM-comment-section">
    <div className='CM-commentLength'>
      <img className="CM-comments-icon" src={commentsIcon} alt="" />
      {`${comments.length} comments`}
    </div>
    <div className="CM-commentList">
      {comments.map((comment) =>
        <CommentsEntry addReply={addReply} comment={comment} key={comment._id} />
      )}
    </div>
  </div>
);


export default CommentsList;

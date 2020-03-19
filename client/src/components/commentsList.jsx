import React from 'react';
import CommentsEntry from './commentsEntry.jsx';

const CommentsList = ({comments}) => (
  <div>
    {comments.map((comment) => 
      <CommentsEntry comment={comment} />
    )}
  </div>
);

export default CommentsList;

import React from 'react';

const CommentsEntry = ({comment}) => (
  <div>
    <div><img className='CM-profileImage' src={comment.name.image} alt= "image not found" /></div>
    <div className='CM-userName'>{comment.name.name}</div>
    <div className='CM-commentText'>{comment.text}</div>
    <div className='CM-time'>{comment.time}</div>
  </div>
);

export default CommentsEntry;

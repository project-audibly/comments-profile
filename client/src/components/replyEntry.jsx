import React from 'react';

const ReplyEntry = ({reply}) => (
  <div>
    <div className="CM-replyEntry">
      <div><img className="CM-profileImage" src={reply.name[0].image} alt="" /></div>
      <div className="CM-userName">{reply.name[0].name}</div>
      <div className="CM-commentText">{reply.text}</div>
      <div className="CM-time">{reply.time}</div>
    </div>
  </div>
);

export default ReplyEntry;

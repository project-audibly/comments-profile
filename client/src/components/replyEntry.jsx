import React from 'react';

const ReplyEntry = ({reply}) => (
  <div>
    <div className="CM-replyEntry">
      <img className="CM-profileImage2" src={reply.name[0].image} alt="" />
      <div className="CM-userName2">{reply.name[0].name}</div>
      <div className="CM-commentText2">{reply.text}</div>
      <div className="CM-time2">{reply.time}</div>
    </div>
  </div>
);

export default ReplyEntry;

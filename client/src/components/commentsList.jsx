import React from 'react';
import CommentsEntry from './commentsEntry.jsx';

const CommentsList = ({comments}) => (
  <div>
    {comments.map((comment) => 
      <CommentsEntry comment={comment} key={comment._id} />
    )}
  </div>
);

// class CommentsList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       show: false,
//     };
//   }
//   render() {
//     return (
//       <div>
//         {this.props.comments.map((comment) =>
//           <CommentsEntry comment={comment} />
//         )}
//       </div>
//     )
//   }
// }


export default CommentsList;

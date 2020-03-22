import React from 'react';
import axios from 'axios';
import CommentsList from './commentsList.jsx';
import CommentsInputBar from './commentsInputBar.jsx'
import Tracker from './tracker.jsx';
import MusicProfile from './musicProfile.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
    this.getComments = this.getComments.bind(this);
    this.addComment = this.addComment.bind(this);
  }

  componentDidMount() {
    this.getComments();
  }
  
  getComments() {
    axios.get('/api/comments')
      .then((response) => {
        // console.log(response.data);
        this.setState({ comments: response.data });
        console.log('Success! Retrieved data from server');
      })
      .catch((error) => {
        console.log(error, 'failed to retrieve list of commments');
      });
  }

  addComment(input) {
    console.log(`the comment ${input} was posted`)
    axios.post('/api/comments', {input})
      .then(() => {
        console.log('post request succeeded')
      })
      .catch((error) => {
        console.log(error, 'failed to post comment')
      })
  }

  render() {
    return (
      <div>
        <div className="CM-comments">
          <CommentsInputBar addComment={this.addComment} />
          <Tracker />
          <MusicProfile />
          <CommentsList comments={this.state.comments} />
        </div>
      </div>
    );
  }
}

export default App;

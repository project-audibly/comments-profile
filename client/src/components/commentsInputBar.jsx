import React from 'react';

class CommentsInputBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    const input = event.target.input;
    const value = event.target.value;
    this.setState({
      input: value,
    })
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <forms onSubmit={this.handleSubmit}>
          <label>add comment</label>
          <input type='text' onChange={this.handleChange} />
          <input type='submit' value='submit' />
        </forms>
      </div>
    )
  }
};

export default CommentsInputBar;

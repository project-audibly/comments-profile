import React from 'react';

class ReplyInputBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reply: '',
    }
    this.handleInput=this.handleInput.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleInput(event) {
    const  value = event.target.value;
    this.setState({
      reply: value,
    })
  }
  handleSubmit(event) {
    event.preventDefault()
  }

  render() {
    return (
      <div className="CM-reply-input-bar">
        <form onSubmit={this.handleSubmit}>
          <input className="CM-reply-bar" value={this.state.reply} onChange={this.handleInput} />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default ReplyInputBar;

import React from 'react';
import faker from 'faker';
import '../index.css';

const newComment = [];
class CommentForm extends React.Component {
  constructor() {
    super();
    this.state = {
      lcomments: newComment,
    };
  }

  Enter() {
    if (event.keyCode === 13) {
      this.Submit();
    }
  }

  Submit() {
    const commentText = document.getElementById('comment').value;
    const image = document.getElementById('image').src;
    const comment = {};
    comment.name = faker.name.findName();
    comment.image = image;
    comment.text = commentText;
    const realComments = JSON.parse(localStorage.getItem('lcomments')) || [];
    realComments.push(comment);
    localStorage.setItem('lcomments', JSON.stringify(realComments));
    this.setState({ lcomments: newComment });
  }

  ShowComments() {
    const ncomment = localStorage.getItem('lcomments');
    const realComments = JSON.parse(ncomment);
    return (
      <div>
        {
          realComments.map((comment, index) => (
            <div>
              <img src={comment.image} alt="profilepic" />
              <p key={index}>{comment.name}: {comment.text}</p>
            </div>
          ),
          )
          }
      </div>);
  }

  render() {
    return (
      <div>
        <div>
          {this.ShowComments()}
        </div>
        <form onSubmit={this.Submit}>
          <img alt="face" src={this.state.image} className="side" height="50" width="50" id="image" />
          <input type="text" placeholder="Write a comment" className="side" onKeyDown={this.Enter} id="comment" />
        </form>
      </div>
    );
  }
}

export default CommentForm;

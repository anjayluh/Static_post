import React, { Component } from 'react';

class Likes extends Component {
  constructor() {
    super();
    this.state = {
      like: '0',
      userWhoLiked: '[]',
      userName: '',
    };
    this.handleLikes = this.handleLikes.bind(this);
  }
  handleLikes() {
    this.setState({ like: this.state.like + 1 });
  }
  /* showLikes(){

  }*/
  render() {
    console.log('render');
    return (
      <div>
        <button onClick={this.handleLikes} id="likeButton">
          Like &nbsp; {this.like}
        </button>
      </div>
    );
  }
}
export default Likes;

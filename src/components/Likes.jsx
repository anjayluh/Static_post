import React from 'react';
import commentTab from '../images/comment.PNG';
import thumb from '../images/thumb.PNG';
import '../index.css';


const numberOfLikes = 15;


class Likes extends React.Component {

  constructor() {
    super();
    this.state = {
      like: numberOfLikes,
      count: 0,
    };
  }
  onLike() {
    if (this.state.count === 0) {
      localStorage.setItem('like', JSON.stringify(this.state.like));
      this.setState({ like: this.state.like + 1 });
      localStorage.setItem('count', JSON.stringify(this.state.count));
      this.setState({ count: this.state.count + 1 });
    } else {
      localStorage.setItem('like', JSON.stringify(this.state.like));
      this.setState({ like: this.state.like - 1 });
      localStorage.setItem('count', JSON.stringify(this.state.count1));
      this.setState({ count: this.state.count - 1 });
    }
  }

  render() {
    return (
      <div>
        <div>
          <p className="likes"> {localStorage.getItem('like')} likes </p>
          <hr />
        </div>
        <div>
          <img src={thumb} alt="Like" />
          <button onClick={this.onLike.bind(this)} id="like">Like</button>
          &nbsp;&nbsp;
          <a href="">
            <img src={commentTab} alt="" />
          </a>
        </div>

      </div>
    );
  }
}
export default Likes;


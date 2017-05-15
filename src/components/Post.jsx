import React from 'react';
import profilePhoto from '../images/NBC-news.png';
import myPost from '../images/teen-reporters.jpg';
import Likes from './Likes.jsx';
import '../index.css';
import '../bootstrap/bootstrap.css';
import CommentForm from './CommentForm.jsx';

class Post extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'In LA’s Boyle Heights, Latino Teens Draw National Praise for Community Journalism',
      datePosted: '27 mins',
      userName: 'NBC News',
    };
  }
  render() {
    return (
      <div className="facebook">
        <div className="container">
          <div className="row" id="header">
            <div className="col-md-1">
              <img src={profilePhoto} alt="profilePicture" height="40" width="40" />
            </div>

            <div className="col-md-4" id="userName">
              {this.state.userName}
              <p3 className="live"> is live now.</p3>
              <div id="postDate">
                {this.state.datePosted}
              </div>
            </div>
          </div>
          <div className="postTitle">
            {this.state.title}
          </div>
          <br />
          <div>
            <img src={myPost} id="myPost" alt="myPost" />
          </div>
        </div>
        <div className="container">
          <div className="row" id="react">
            <div className="col-md-8">
              <Likes />
            </div>
            <div className="container">
              <div className="row" id="react">
                <CommentForm />
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    );
  }
}
export default Post;


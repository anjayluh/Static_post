import React from 'react';
import '../index.css';
import profilePhoto from '../images/NBC-news.png';
import myPost from '../images/teen-reporters.jpg';

function Post() {
  // const profilePhoto = '../images/download.jpg';
  // const userName = '';
  const title = 'In LA’s Boyle Heights, Latino Teens Draw National Praise for Community Journalism';
  // const myPost = '../images/images.jpg';
  const datePosted = '27 mins';
  // const timePosted = new Date().toLocaleTimeString();
  // likes: '',
  // comments: '',
  return (
    <div className="container">
      <table cellSpacing="0">
        <tr><td rowSpan="2">
          <img src={profilePhoto} height="50" width="50" alt="profilePicture" />
        </td>
          <td>
            <p1 className="userName">NBC News <p3 className="live">is live now.</p3></p1>
          </td></tr><tr><td>
            <p2 className="postDate"> {datePosted}</p2></td></tr></table>
      <p className="postTitle">{title}</p> <br />
      <img src={myPost} id="myPost" alt="myPost" />
    </div>
  );
}
export default Post;

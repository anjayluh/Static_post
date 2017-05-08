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
      <h5 className="subPageTitle">
        <img src={profilePhoto} className="profilePicture" alt="profilePicture" />
        &nbsp;
        <span className="userName">NBC News <span className="live">is live now.</span> </span>
        <div className="postDate"> {datePosted}</div>
      </h5>
      <p className="postTitle">{title}</p>
      <img src={myPost} id="myPost" alt="myPost" />
    </div>
  );
}
export default Post;

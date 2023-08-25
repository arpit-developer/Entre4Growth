import React from 'react'
import './E4GCommunity.css';

export const E4GCommunity = () => {
    return (
      <div className="community">
        {/* ... previous code */}
        <div className="user-posts">
          <h3>Latest Posts</h3>
          <UserPost username="User123" content="Just joined the community! Excited to learn and collaborate." />
          <UserPost username="DevStar" content="Working on an exciting project. Can't wait to share!" />
          {/* Add more user posts */}
        </div>
      </div>
    );
  };
  const UserPost = ({ username, content }) => {
    return (
      <div className="user-post">
        <h4>{username}</h4>
        <p>{content}</p>
      </div>
    );
  };
  export default E4GCommunity;
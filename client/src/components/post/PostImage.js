import React from "react";

const PostImage = ({ imageURL }) => {
  return (
    <div className="postImage">
      <img src={imageURL} alt="postImg" />
    </div>
  );
};

export default PostImage;

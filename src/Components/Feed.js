import React from "react";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";

const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://icons-for-free.com/iconfiles/png/512/avatar-1320568024619304547.png"
        message="yoo this is message"
        timestamp="time"
        imgName="imgName"
        username="Frankie"
      />

      {/* {postsData.map((entry) => (
        <Post
          profilePic={entry.avatar}
          message={entry.text}
          timestamp={entry.timesta}
          imgName={entry.imgName}
          username={entry.user}
        />
      ))} */}
    </div>
  );
};

export default Feed;

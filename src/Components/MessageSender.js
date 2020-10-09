import React, { useState } from "react";
import { Avatar, Input } from "@material-ui/core";

const MessageSender = () => {
  const [input, setInput] = useState("");
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    console.log("Submitting");
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src="https://icons-for-free.com/iconfiles/png/512/avatar-1320568024619304547.png" />
        <form action="">
          <input
            type="text"
            className="messageSender__input"
            placeholder="What's on your mind?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Input
            type="file"
            className="messageSender__fileSelector"
            onChange={handleChange}
          />
          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default MessageSender;

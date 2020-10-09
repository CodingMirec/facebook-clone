import React from "react";
import Story from "./Story";

import "./StoryReel.css";

const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story
        image="https://images.saatchiart.com/saatchi/867174/art/4111131/3180983-AZHHNZOU-7.jpg"
        profileSrc="https://avatarfiles.alphacoders.com/715/71560.jpg"
        title="Mirec Best"
      />

      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHt5LnmE4wl3bAaLGR6Jk57qaFEDZT0-KC8A&usqp=CAUadadada"
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ69cwsewMi0fHC1ng9lIExsPkTOfNl5f2FIg&usqp=CAU"
        title="Klaudi Best"
      />

      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBTxR4_3fErX79XuroZXlgE9Z_tAKNggmNxg&usqp=CAU"
        profileSrc="https://avatarfiles.alphacoders.com/865/86518.png"
        title="We are Best"
      />
    </div>
  );
};

export default StoryReel;

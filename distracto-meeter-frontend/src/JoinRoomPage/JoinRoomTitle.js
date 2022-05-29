import React from "react";

const JoinRoomTitle = ({ isRoomHost }) => {
  const titleText = isRoomHost ? "Start meeting" : "Join meeting";

  return <p className="join_room_title">{titleText}</p>;
};

export default JoinRoomTitle;

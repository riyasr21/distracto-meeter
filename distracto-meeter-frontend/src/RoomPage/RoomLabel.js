import React from "react";

const RoomLabel = ({ roomId }) => {
  return (
    <div className="room_label">
      <p className="room_label_paragraph">ID: {roomId} <br/>  Copy and send this id to people to join your meeting.</p>
     
    </div>
  );
};

export default RoomLabel;

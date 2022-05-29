import React from "react";

const ConnectingButton = ({
  createRoomButton = false,
  buttonText,
  onClickHandler,
  onMouseOverHandler,
  onMouseLeaveHandler
}) => {
  const buttonClass = createRoomButton
    ? "create_room_button"
    : "join_room_button";

  return (
    <button className={buttonClass} onClick={onClickHandler} onMouseEnter={onMouseOverHandler} onMouseLeave={onMouseLeaveHandler}>
      {buttonText}
    </button>
  );
};

export default ConnectingButton;

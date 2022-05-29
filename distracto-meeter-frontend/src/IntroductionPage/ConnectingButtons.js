import React from "react";
import ConnectingButton from "./ConnectingButton";
import { useHistory } from "react-router-dom";

const ConnectingButtons = () => {
  let initialTxt = "a web based video meeting application along with detection of user's awareness and expression";
  const [text, setText] = React.useState(initialTxt);
  let history = useHistory();

  const pushToJoinRoomPage = () => {
    history.push("/join-room");
  };

  const pushToJoinRoomPageAsHost = () => {
    history.push("/join-room?host=true");
  };

  return (
    <div className="connecting_buttons_container">
      <p id="description">{text}</p>
      <ConnectingButton
        buttonText="Join a meeting"
        onClickHandler={pushToJoinRoomPage}
        onMouseOverHandler={() => setText("As a meeting attendee, you agree to get your face detected for facial expressions and awareness alert measure. Only the meeting host gets this feature.")}
        onMouseLeaveHandler={() => setText(initialTxt)}
      />
      <ConnectingButton
        createRoomButton
        buttonText="Start your meeting"
        onClickHandler={pushToJoinRoomPageAsHost}
        onMouseOverHandler={() => setText("As a meeting host, you can single click on participant's incoming video streams to detect their faces. After clicking again on their stream you can go back to normal meeting. As this project is a prototype, please click on 1 video stream at a time to ensure smooth functioning.")}
        onMouseLeaveHandler={() => setText(initialTxt)}

      />
      
      
                
    </div>
  );
};

export default ConnectingButtons;

import React, { useState } from "react";
import ChatLeft from "./ChatLeft";
import ChatRight from "./ChatRight";
import "./chatPage.css";

const ChatPage = () => {
  const [active, setActive] = useState(true);

  const changeUser = () => {
    setActive(false);
  };

  return (
    <div className="chatpage-wrapper">
      <ChatLeft changeUser={changeUser} active={active} />
      <ChatRight />
    </div>
  );
};

export default ChatPage;

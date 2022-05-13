import React from "react";

const ChatLeft = ({ changeUser, active }) => {
  return (
    <div className="chatLeft-wrapper">
      <div className="chat-page-border">
        <label className="switch">
          <input type="checkbox" className="switch-input" />
          <span className="switch-label"></span>
          <span className="switch-handle"></span>
        </label>
        <p>Desktop Notification</p>
      </div>
      <div
        className={active ? "chat-page-user-info" : "chat-page-user-infoActive"}
        onClick={changeUser}
      >
        <img src="./images/1647068598.png" alt="img" />
        <div className="chat-page-user-name">
          <p>Jai Chouhan</p>
          <span>May I know the product ID please</span>
        </div>
        <p className="chat-page-user-info-p">4m</p>
      </div>
    </div>
  );
};

export default ChatLeft;

import React, { useState } from "react";

const ChatRight = () => {
  const [chat, setChat] = useState([
    { message: "hello", status: "1" },
    { message: "hiii", status: "just now" },
  ]);
  const [message, setMessage] = useState("");

  const d = new Date();
  let seconds = d.getSeconds();

  const clickMessage = (e) => {
    e.preventDefault();
    const data = [...chat];
    data.push({ message: message, status: seconds });
    setChat(data);
    setMessage("");
  };

  return (
    <div className="chatRight-wrapper">
      <div className="chat-model-size">
        <div className="chat-model-size-img">
          <img src="./images/1647068598.png" alt="img" />
          <div className="chat-model-size-status">
            <p>Jai Chouhan</p>
            <span>1 min</span>
          </div>
        </div>
        <div className="chat-model-size-height1">
          {chat &&
            chat.map((data, i) => (
              <div className="chat-model-size-help" key={i}>
                <p>{data.message}</p>
                <span>{data.status}s</span>
              </div>
            ))}
          {/*   <div className="chat-model-size-client">
            <p>Hi</p>
            <span>
              1m <i class="fa fa-check"></i>
            </span>
  </div>*/}
        </div>
        <div className="chat-model-size-position">
          <div className="chat-model-size-input">
            <form onSubmit={clickMessage}>
              <div className="chat-model-size-input-i">
                <input
                  type="text"
                  placeholder="Say something"
                  value={message}
                  onInput={(e) => setMessage(e.target.value)}
                />
                <label htmlFor="featured">
                  <input
                    type="file"
                    className="d-none"
                    id="featured"
                    name="message"
                  />
                  <i
                    className="fa fa-paperclip"
                    id="featured"
                    aria-hidden="true"
                  ></i>
                </label>
                <button type="submit" className="d-none">
                  submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatRight;

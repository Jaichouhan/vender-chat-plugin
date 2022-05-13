import React, { useEffect, useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { ref, push, set, onChildAdded } from "firebase/database";

const ClickModel = ({ db }) => {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [name, setName] = useState("");

  const chatMessage = ref(db, "message");

  useEffect(() => {
    onChildAdded(chatMessage, (data) => {
      setChat((chat) => [...chat, data.val()]);
    });
  }, []);

  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  const d = new Date();
  let h = addZero(d.getHours());
  let m = addZero(d.getMinutes());
  let s = addZero(d.getSeconds());
  let time = h + ":" + m + ":" + s;

  const typeMessage = (e) => {
    e.preventDefault();
    const msg = push(chatMessage);
    set(msg, {
      receiverId: 1,
      receiverName: "Jai",
      senderId: 2,
      senderName: "Dheeraj",
      message: message,
      status: time,
      name: name,
    });
    setMessage("");
  };

  return (
    <div>
      {name ? null : (
        <input
          type="text"
          placeholder="please enter name"
          onBlur={(e) => setName(e.target.value)}
        />
      )}
      {name ? (
        <div className="app">
          <div className="open-btn-dot"></div>
          <button type="button" className="open-btn" onClick={onOpenModal}>
            CHAT NOW
          </button>
        </div>
      ) : null}
      <Modal
        open={open}
        onClose={onCloseModal}
        classNames={{ modal: "message-pop-model" }}
        center
      >
        <div className="chat-model-size">
          <div className="chat-model-size-img">
            <img src="./images/1647068598.png" alt="img" />
            <div className="chat-model-size-status">
              <p>{name}</p>
              <span>1 min</span>
            </div>
          </div>
          <div className="chat-model-size-height">
            {chat &&
              chat.map((data, i) => (
                <div
                  className={`${
                    data.name === name
                      ? "chat-model-size-client"
                      : "chat-model-size-help"
                  }`}
                  key={i}
                  style={{ position: "relative" }}
                >
                  <p>{data.message}</p>
                  <p
                    style={{
                      position: "absolute",
                      top: "-20px",
                      marginBottom: "10px",
                      display: "none",
                    }}
                  >
                    {data.name}
                  </p>
                  <span>{data.status}s</span>
                </div>
              ))}
          </div>

          <div className="chat-model-size-position">
            <form onSubmit={typeMessage}>
              <div className="chat-model-size-input d-flex">
                <div className="chat-model-size-input-i">
                  <input
                    type="text"
                    placeholder="Say something"
                    value={message}
                    onInput={(e) => setMessage(e.target.value)}
                  />
                  {/*<label htmlFor="featured">
                <input type="file" className="d-none" id="featured" />
                <i
                  class="fa fa-paperclip"
                  id="featured"
                  aria-hidden="true"
                ></i>
</label>*/}
                </div>
                <div className="">
                  <button type="submit">Send</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal>
      {open ? (
        <div className="close-model" onClick={onCloseModal}>
          <i className="fa fa-close"></i>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ClickModel;

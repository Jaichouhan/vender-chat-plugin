import React, { useEffect, useRef, useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { ref, push, set, onChildAdded } from "firebase/database";
import { getAuth } from "firebase/auth";
import Messagechat from "./Messagechat";
import { uid } from "uid";

const ClickModel = ({ db }) => {
  const customRef = useRef();
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [name, setName] = useState("");
  const [current, setCurrent] = useState(name);
  const auth = getAuth();

  // const postId = () => {};
  const chatNode = "20-100";

  const chatMessage = ref(db, "message/" + chatNode);

  useEffect(() => {
    setChat([]);
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
  const uuid = uid();

  const typeMessage = (e) => {
    e.preventDefault();
    // const userId = auth.currentUser.uid;
    const msg = push(chatMessage);
    set(msg, {
      message: message,
      status: time,
      name: name,
      uuid,
      // userId: userId,
      // createdAt: db.firestore.FieldValue.serverTimestamp(),
    });
    setMessage("");
    customRef.current.scrollIntoView({ behavior: "smooth" });
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
              <span>{time}s</span>
            </div>
          </div>
          <div className="chat-model-size-height">
            <Messagechat name={name} chat={chat} />
          </div>
          <span ref={customRef}></span>

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
                  <button type="submit" disabled={!message}>
                    Send
                  </button>
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

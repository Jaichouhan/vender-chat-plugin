import React from "react";

const Messagechat = ({ chat, name }) => {
  console.log(chat);
  return (
    <div>
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
  );
};

export default Messagechat;

import React, {useCallback, useState, useEffect} from "react";
import ReactDOM from "react-dom";
import "./index.css";

// function MessageChat(props) {
// console.log("props", props);

//   return (
//     <div class="chat2">
//       <h3>Саша:</h3>
//       <h4>{props.Messag}</h4>
//     </div>
//   );
// }

// const Message = () => {
//   const Messag = "Привет";

//   return(
//     <div class="chat1">
//       <h1>MessageChat</h1>

//       < MessageChat Messag={Messag} />
//     </div>
//   );
// }

const Messages = () => {
  const [messages, setMessages] = useState([]);
  // const [message, setMessage] = useState("");

  const sendMessage = useCallback((author = "User", msg) => {
    setMessages((messages) => [
      ...messages,
      { author: author ?? "Bot", message: msg },
    ]);
  }, []);

  useEffect(() => {
    if (messages.length && messages[messages.length - 1]?.author === "User") {
      sendMessage("Bot", "from Bot");
    }
  }, [messages, sendMessage]);

  return (
    <div>
      <button onClick={() => sendMessage("User", "Test")}>sendMessage</button>

      {messages.map((messages) => (
        <div>
          <h1>chat</h1>
          <chat sendMessage={messages} />
        </div>
      ))}
      {/* <button onClick={() => setMessage("User", "Test")}>setMessage</button> */}
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Messages />
  </React.StrictMode>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <React.StrictMode>
//     <Message/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

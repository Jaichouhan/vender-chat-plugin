import React from "react";
import "./App.css";
import ChatPage from "./Components/ChatPage";
import ClickModel from "./Components/ClickModel";
import { getDatabase } from "firebase/database";
const App = () => {
  const db = getDatabase();

  return (
    <div>
      <ClickModel db={db} />
    </div>
  );
};

export default App;

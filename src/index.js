import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC4Bd_CXupIyNKZ9TR-arMSUnwOKrXixv8",
  authDomain: "vender-chat-plugin.firebaseapp.com",
  databaseURL: "https://vender-chat-plugin-default-rtdb.firebaseio.com",
  projectId: "vender-chat-plugin",
  storageBucket: "vender-chat-plugin.appspot.com",
  messagingSenderId: "748089670667",
  appId: "1:748089670667:web:d62cfd307513065db99b0e",
  measurementId: "G-FJ3DNEN5JY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

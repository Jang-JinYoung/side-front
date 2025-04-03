import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css'; // Tailwind CSS 임포트

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

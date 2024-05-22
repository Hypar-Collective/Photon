import React from "react";

import { createRoot } from "react-dom/client";
import "./App.css";

const root = createRoot(document.getElementById("root") as Element);

export default function App() {
  return (
    <div className="h-screen flex flex-col text-center justify-center">
      <h2 className="text-5xl font-light">👋🏻 Hello from React!</h2>
    </div>
  );
}

root.render(<App />);

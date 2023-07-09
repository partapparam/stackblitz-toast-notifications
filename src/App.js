import React from "react";
import { Home } from './Home'
import "./style.css";

export default function App() {
  return (
    <div style={{border: '1px solid red', padding: '8px'}}>
      <h1>App Component</h1>
      <p>Start editing to see some magic happen :)</p>
      <Home />
    </div>
  );
}

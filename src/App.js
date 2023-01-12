import React from "react";
//import "./App.css";
import "./styles/app.css";
import "bootstrap/dist/css/bootstrap.min.css";
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
/>;
import { RouterProvider } from "react-router-dom";
import router from "./library/routes/routes";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

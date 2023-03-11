import React, { useState } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Routes/Routes/Routes";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <RouterProvider router={router}>
      <div className="App">
        <Toaster/>
      </div>
    </RouterProvider>
  );
}

export default App;

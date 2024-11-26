import React from "react";
import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Routing from "./components/Routing";
import Results from "./components/Results";

function App() {
  const [darkTheme, setDarkTheme] = useState(false)

  function changeDarkTheme() {
    setDarkTheme(!darkTheme)
  }

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen ">
        <Navbar darkTheme={darkTheme} changeDarkTheme={changeDarkTheme} />
        <Results/>
        <Routing />
        <Footer />
      </div>
    </div>
  );
}

export default App;

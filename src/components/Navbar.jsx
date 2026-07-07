import { FaMoon, FaSun } from "react-icons/fa";

import { useTheme } from "../context/ThemeContext";

import "../styles/Navbar.css";

function Navbar() {

  const {

    darkMode,

    toggleTheme

  } = useTheme();

  return (

    <header className="navbar">

      <div>

        <h1>

          🚀 ProDesk Onboarding

        </h1>

      </div>

      <button

        className="theme-btn"

        onClick={toggleTheme}

      >

        {

          darkMode

            ? <FaSun />

            : <FaMoon />

        }

      </button>

    </header>

  );

}

export default Navbar;
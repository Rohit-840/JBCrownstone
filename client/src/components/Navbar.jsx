import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function Navbar() {

  // ✅ Get saved theme from localStorage
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // ✅ Apply theme + save it
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-black/80 dark:bg-white/80 backdrop-blur-md shadow-md">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-xl font-bold text-yellow-400">
          JB CROWNSTONE
        </h1>

        <div className="flex items-center gap-8 text-sm font-medium">

          <Link to="/" className="hover:text-yellow-400">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/book">Book Now</Link>

          {/* DARK MODE BUTTON */}
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          <div className="flex gap-3">

  {/* LOGIN */}
  <Link
    to="/login"
    className="border border-yellow-400 px-4 py-1 rounded-lg hover:bg-yellow-400 hover:text-black transition"
  >
    Login
  </Link>

  {/* SIGNUP */}
  <Link
    to="/signup"
    className="bg-yellow-400 text-black px-4 py-1 rounded-lg font-semibold hover:scale-105 transition"
  >
    Signup
  </Link>

</div>

        </div>
      </div>
    </div>
  );
}

export default Navbar;
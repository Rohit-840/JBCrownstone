import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("https://jbcrownstone.onrender.com/api/auth/login", {
        username,
        password,
      });

      localStorage.setItem("token", res.data.token);
      navigate("/trading");
    } catch (err) {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[#0b0f19]">

      <div className="bg-[#111827] p-10 rounded-xl shadow-xl w-96">

        <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
          Login
        </h2>

        <input
          type="text"
          placeholder="Username"
          className="w-full mb-4 p-3 rounded-lg bg-gray-800 text-white"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-3 rounded-lg bg-gray-800 text-white"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:scale-105 transition"
        >
          Login
        </button>

        <p className="text-gray-400 text-sm mt-4 text-center">
          Don’t have an account?{" "}
          <span
            className="text-yellow-400 cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Signup
          </span>
        </p>

      </div>
    </div>
  );
}

export default Login;
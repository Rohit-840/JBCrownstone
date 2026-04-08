import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        username,
        password,
      });

      alert("Account Created!");
      navigate("/login");
    } catch (err) {
      alert("Error creating account");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[#0b0f19]">

      <div className="bg-[#111827] p-10 rounded-xl shadow-xl w-96">

        <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
          Signup
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
          onClick={handleSignup}
          className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:scale-105 transition"
        >
          Signup
        </button>

        <p className="text-gray-400 text-sm mt-4 text-center">
          Already have an account?{" "}
          <span
            className="text-yellow-400 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>

      </div>
    </div>
  );
}

export default Signup;
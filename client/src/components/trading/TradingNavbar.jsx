import { FaCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function TradingNavbar() {
  const [time, setTime] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toUTCString());
    }, 1000);
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="flex justify-between items-center px-8 py-5 bg-[#0e1420] border-b border-gray-800">
      <div>
        <h1 className="text-2xl font-bold text-yellow-400">
          JB CROWNSTONE
        </h1>
        <p className="text-xs text-gray-400">
          Quantitative Portfolio Manager
        </p>
      </div>

      <div className="flex items-center gap-6">
        <p className="text-sm text-gray-400">{time}</p>

        <div className="flex items-center gap-2 bg-[#0f1f1a] px-3 py-1 rounded-full text-green-400 text-sm">
          <FaCircle className="text-[8px]" />
          LIVE FEED
        </div>

        <button
          onClick={logout}
          className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 text-sm"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default TradingNavbar;
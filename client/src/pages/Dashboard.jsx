import { useEffect, useState } from "react";

function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
  const fetchData = () => {
    fetch("http://localhost:5000/api/mt5/data")
      .then((res) => res.json())
      .then((res) => {
        console.log("LIVE MT5:", res);
        setData(res);
      })
      .catch((err) => console.log(err));
  };

  fetchData(); // first call

  const interval = setInterval(fetchData, 1000); 

  return () => clearInterval(interval); // cleanup
}, []);

  if (!data) {
    return <p className="text-white p-6">Loading MT5...</p>;
  }

  return (
    <div className="bg-[#0b0f19] min-h-screen text-white p-6">

      {/* ACCOUNT */}
      <h2 className="text-xl mb-4">Account Summary</h2>

      <div className="bg-[#111827] p-4 rounded mb-6">
        <p>Balance: ₹{data.account.balance}</p>
        <p>Equity: ₹{data.account.equity}</p>
        <p>Margin: ₹{data.account.margin}</p>
      </div>

      {/* Balance grey bar */}
<div className="bg-[#1f2937] p-4 rounded mb-6 flex flex-wrap gap-6 text-sm">

  <div>
    <p className="text-gray-400">Balance</p>
    <p className="text-yellow-400 font-semibold">
      ₹{data.account.balance.toFixed(2)}
    </p>
  </div>

  <div>
    <p className="text-gray-400">Equity</p>
    <p>₹{data.account.equity.toFixed(2)}</p>
  </div>

  <div>
    <p className="text-gray-400">Margin</p>
    <p>₹{data.account.margin.toFixed(2)}</p>
  </div>

  <div>
    <p className="text-gray-400">Free Margin</p>
    <p>₹{data.account.freeMargin.toFixed(2)}</p>
  </div>

  <div>
    <p className="text-gray-400">Margin Level</p>
    <p className="text-green-400">
      {data.account.marginLevel.toFixed(2)}%
    </p>
  </div>

</div>

      {/* Open Trades */}
      <h2 className="text-xl mb-4">Open Trades</h2>

      {data.trades.length === 0 ? (
        <p>No open trades</p>
      ) : (
        <table className="w-full text-center mb-6">
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Type</th>
              <th>Volume</th>
              <th>Profit</th>
            </tr>
          </thead>
          <tbody>
            {data.trades.map((t, i) => (
              <tr key={i}>
                <td>{t.symbol}</td>
                <td>{t.type}</td>
                <td>{t.volume}</td>
                <td className={t.profit < 0 ? "text-red-400" : "text-green-400"}>
                  {t.profit}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Trade History */}
      <h2 className="text-xl mb-4">Trade History</h2>

      {data.history.length === 0 ? (
        <p>No history</p>
      ) : (
        <table className="w-full text-center m-5">
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Type</th>
              <th>Volume</th>
              <th>Profit</th>
            </tr>
          </thead>
          <tbody>
            {data.history.map((h, i) => (
              <tr key={i}>
                <td>{h.symbol}</td>
                <td>{h.type}</td>
                <td>{h.volume}</td>
                <td className={h.profit < 0 ? "text-red-400" : "text-green-400"}>
                  {h.profit}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

    </div>
  );
}

export default Dashboard;
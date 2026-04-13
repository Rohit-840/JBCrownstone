import { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function AssetModal({ account, onClose }) {
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    if (!account) return;

    fetch(`http://localhost:5000/api/myfxbook/history/${account.id}`)
      .then((res) => res.json())
      .then((data) => {
  console.log("HISTORY:", data);

  const history = data.history || [];

  const formatted = history.map((t) => ({
    name: t.symbol,
    type: t.cmd.toUpperCase(),
    lots: t.volume,
    open: t.openPrice,
    close: t.closePrice,
    pl: Number(t.profit).toFixed(2),
  }));

  setTrades(formatted);
})
      .catch((err) => console.log("ERROR:", err));
  }, [account]);

  if (!account) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
      <div className="bg-[#111827] p-6 rounded-xl w-[900px] relative">

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
        >
          ✖
        </button>

        {/* Header */}
        <h2 className="text-xl mb-4">
          {account.name} - Performance
        </h2>

        {/* GRAPH + ASSETS */}
        <div className="grid grid-cols-3 gap-6 mb-6">

          {/* GRAPH */}
          <div className="col-span-2 bg-[#0b0f19] p-4 rounded-lg">
            <h3 className="mb-3 text-gray-300">Equity Curve</h3>

            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={account.chart}>
                <XAxis dataKey="name" stroke="#555" />
                <YAxis stroke="#555" />
                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#facc15"
                  fill="rgba(250,204,21,0.2)"
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* ASSETS */}
          <div className="bg-[#0b0f19] p-4 rounded-lg">
            <h3 className="text-gray-300 mb-3">Monitored Assets</h3>

            {account.assets.map((asset, i) => (
              <div
                key={i}
                className="flex justify-between py-2 border-b border-gray-700"
              >
                <span>{asset.name}</span>
                <span
                  className={
                    asset.profit.includes("-")
                      ? "text-red-400"
                      : "text-green-400"
                  }
                >
                  {asset.profit}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Trades Table */}
        <div className="bg-[#0b0f19] rounded-lg overflow-hidden">
          <table className="w-full text-sm">

            <thead className="bg-[#111827] text-gray-400 text-xs uppercase">
              <tr>
                <th className="py-3 px-4 text-left">Asset</th>
                <th className="py-3 px-4 text-left">Type</th>
                <th className="py-3 px-4 text-left">Lots</th>
                <th className="py-3 px-4 text-left">Open</th>
                <th className="py-3 px-4 text-left">Close</th>
                <th className="py-3 px-4 text-right">P/L</th>
              </tr>
            </thead>

            <tbody>
              {trades.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center py-4 text-gray-400">
                    No trades available
                  </td>
                </tr>
              ) : (
                trades.map((trade, i) => (
                  <tr
                    key={i}
                    className="border-b border-gray-800 hover:bg-[#111827]"
                  >
                    <td className="py-3 px-4 font-semibold">
                      {trade.name}
                    </td>

                    <td
                      className={`py-3 px-4 ${
                        trade.type === "BUY"
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {trade.type}
                    </td>

                    <td className="py-3 px-4">{trade.lots}</td>
                    <td className="py-3 px-4">{trade.open}</td>
                    <td className="py-3 px-4">{trade.close}</td>

                    <td
                      className={`py-3 px-4 text-right ${
                        trade.pl.includes("-")
                          ? "text-red-400"
                          : "text-green-400"
                      }`}
                    >
                      {trade.pl}
                    </td>
                  </tr>
                ))
              )}
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
}

export default AssetModal;
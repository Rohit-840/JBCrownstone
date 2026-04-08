import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";



function AssetModal({ account, onClose }) {
  if (!account) return null;
  console.log("MODAL DATA:", account);
    
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">

      <div className="bg-[#111827] p-6 rounded-xl w-[800px] relative">

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
        >
          ✖
        </button>

        {/* HEADER */}
        <h2 className="text-xl mb-4">
          {account.name} - Performance
        </h2>

        {/* STATS */}
        <div className="grid grid-cols-5 gap-4 mb-6 text-sm">
          <div>Total Trades<br /><b>310</b></div>
          <div>RR<br /><b>1:3.5</b></div>
          <div>TP<br /><b>120</b></div>
          <div>SL<br /><b className="text-red-400">34</b></div>
          <div>Drawdown<br /><b className="text-red-400">8.5%</b></div>
        </div>

        {/* 🔥 GRAPH (NEW ADDED) */}
        
        <div className="grid grid-cols-3 gap-6">

  {/* LEFT SIDE → GRAPH */}
  <div className="col-span-2 bg-[#0b0f19] p-4 rounded-lg">

    <h3 className="mb-3 text-gray-300">Equity Curve</h3>

    <ResponsiveContainer width="100%" height={250}>
      <AreaChart data={account.chart || []}>
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

  {/* RIGHT SIDE → MONITORED ASSETS */}
  <div className="bg-[#0b0f19] p-4 rounded-lg">

    <div className="flex justify-between mb-3">
      <h3 className="text-gray-300">Monitored Assets</h3>
      <span className="text-xs text-gray-500">DETAILS</span>
    </div>

    {account.assets?.map((asset, i) => (
      <div
        key={i}
        className="flex justify-between items-center py-3 border-b border-gray-700"
      >
        <div>
          <p className="font-semibold">{asset.name}</p>
          <p className="text-xs text-gray-400">{asset.type}</p>
        </div>

        <p
          className={
            asset.profit.includes("-")
              ? "text-red-400"
              : "text-green-400"
          }
        >
          {asset.profit}
        </p>
      </div>
    ))}

  </div>

</div>

        {/* TABLE */}
        <div className="bg-[#0b0f19] rounded-lg overflow-hidden">
    
  <table className="w-full text-sm">

    {/* HEADER */}
    <thead className="bg-[#111827] text-gray-400 text-xs uppercase tracking-wider">
      <tr>
        <th className="py-3 px-4 text-left">Assests</th>
        <th className="py-3 px-4 text-left">Type</th>
        <th className="py-3 px-4 text-left">Lots</th>
        <th className="py-3 px-4 text-left">Open</th>
        <th className="py-3 px-4 text-left">Close</th>
        <th className="py-3 px-4 text-right">P/L</th>
      </tr>
    </thead>

    {/* BODY */}
        <tbody>
    {account.trades?.map((trade, i) => (
        <tr
        key={i}
        className="border-b border-gray-800 hover:bg-[#111827]"
        >
        <td className="py-3 px-4">{trade.name}</td>

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
    ))}
    </tbody>

  </table>
</div>

      </div>
    </div>
  );
}

export default AssetModal;
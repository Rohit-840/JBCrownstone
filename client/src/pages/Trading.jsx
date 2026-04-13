import { useEffect, useState } from "react";
import TradingNavbar from "../components/trading/TradingNavbar";
import AccountGrid from "../components/trading/AccountGrid";
import AssetModal from "../components/trading/AssetModal";

function Trading() {
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [history, setHistory] = useState([]);

  // TEMP: Fetch history for testing
  useEffect(() => {
    fetch("http://localhost:5000/api/myfxbook/history/12002063")
     
      .then((res) => res.json())
      .then((data) => {
        console.log("FULL HISTORY:", data);
        setHistory(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-[#0b0f19] min-h-screen text-white">

      <TradingNavbar />

      <AccountGrid setSelectedAccount={setSelectedAccount} />

      <AssetModal
        account={selectedAccount}
        onClose={() => setSelectedAccount(null)}
      />
      
      {/*HISTORY SECTION */}
      <div className="p-6">
        <h2 className="text-xl mb-4">History</h2>
        

        {history.length === 0 ? (
          <p className="text-gray-400">No history found</p>
        ) : (
          <table className="w-full text-sm bg-[#111827] rounded-lg overflow-hidden">
            <thead className="bg-[#1f2937] text-gray-400">
              <tr>
                <th className="p-3 text-left">Symbol</th>
                <th className="p-3 text-left">Type</th>
                <th className="p-3 text-left">Lots</th>
                <th className="p-3 text-left">Open</th>
                <th className="p-3 text-left">Close</th>
                <th className="p-3 text-right">Profit</th>
              </tr>
            </thead>

            <tbody>
              {history.map((trade, i) => (
                <tr key={i} className="border-b border-gray-700">
                  <td className="p-3">{trade.symbol}</td>
                  <td className="p-3">
                    {trade.cmd}
                  </td>
                  <td className="p-3">{trade.volume}</td>
                  <td className="p-3">{trade.openPrice}</td>
                  <td className="p-3">{trade.closePrice}</td>
                  <td
                    className={`p-3 text-right ${
                      trade.profit < 0 ? "text-red-400" : "text-green-400"
                    }`}
                  >
                    {trade.profit}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

    </div>
  );
}

export default Trading;




// import { useState } from "react";
// import TradingNavbar from "../components/trading/TradingNavbar" 
// import AccountGrid from "../components/trading/AccountGrid";
// import AssetModal from "../components/trading/AssetModal";

// function Trading() {
//   const [selectedAccount, setSelectedAccount] = useState(null);

//   return (
//     <div className="bg-[#0b0f19] min-h-screen text-white">

//       <TradingNavbar />

//       <AccountGrid setSelectedAccount={setSelectedAccount} />

//         {selectedAccount && (
//             <AssetModal
//                 account={selectedAccount}
//                 onClose={() => setSelectedAccount(null)}
//             />
//         )}

//     </div>
//   );
// }

// export default Trading;
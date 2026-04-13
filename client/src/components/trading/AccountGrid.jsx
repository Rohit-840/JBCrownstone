
import { useEffect, useState } from "react";
import AccountCard from "./AccountCard";

function AccountsGrid({ setSelectedAccount }) {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/myfxbook/accounts")
      .then((res) => res.json())
      .then((data) => {
        console.log("ACCOUNTS:", data);

        const formatted = data.map((acc) => ({
          id: acc.id, // IMPORTANT for history API
          name: acc.name || "Trading Account",
          balance: `₹${Number(acc.balance).toFixed(2)}`,
          profit: `${Number(acc.gain).toFixed(2)}%`,

          chart: [
            { name: "W1", value: acc.balance * 0.7 },
            { name: "W2", value: acc.balance * 0.85 },
            { name: "W3", value: acc.balance },
          ],

          assets: [
            {
              name: acc.currency || "USD",
              type: "Forex",
              profit: acc.profit
                ? `₹${Number(acc.profit).toFixed(2)}`
                : "₹0",
            },
          ],
        }));

        setAccounts(formatted);
      })
      .catch((err) => console.log("ERROR:", err));
  }, []);

  if (accounts.length === 0) {
    return (
      <p className="text-white p-6 text-center">
        Loading accounts...
      </p>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-6 p-6">
      {accounts.map((acc, i) => (
        <AccountCard
          key={i}
          account={acc}
          onClick={setSelectedAccount}
        />
      ))}
    </div>
  );
}

export default AccountsGrid;
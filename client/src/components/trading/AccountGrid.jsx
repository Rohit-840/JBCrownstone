import AccountCard from "./AccountCard";

const accounts = [
  {
    name: "Orion Engine",
    balance: "₹1,20,000",
    profit: "+12%",
    chart: [
      { name: "W1", value: 45000 },
      { name: "W2", value: 47000 },
      { name: "W3", value: 46000 },
      { name: "W4", value: 48000 },
      { name: "W5", value: 51000 },
      { name: "W6", value: 53000 },
    ],
    assets: [
      { name: "XAUUSD", type: "Gold", profit: "+4500" },
      { name: "BTCUSD", type: "Crypto", profit: "+8200" },
      { name: "USOIL", type: "Oil", profit: "-450" },
    ],
    trades: [
      { name: "XAUUSD", type: "BUY", lots: 5, open: 2350, close: 2365, pl: "+7350" },
      { name: "BTCUSD", type: "BUY", lots: 2, open: 61000, close: 63000, pl: "+4000" },
    ],
  },

  {
    name: "Titan Alpha",
    balance: "₹95,000",
    profit: "+8%",
    chart: [
      { name: "W1", value: 38000 },
      { name: "W2", value: 39000 },
      { name: "W3", value: 38500 },
      { name: "W4", value: 40000 },
      { name: "W5", value: 42000 },
      { name: "W6", value: 43000 },
    ],
    assets: [
      { name: "EURUSD", type: "Forex", profit: "+1200" },
      { name: "GBPUSD", type: "Forex", profit: "+900" },
    ],
    trades: [
      { name: "EURUSD", type: "BUY", lots: 3, open: 1.08, close: 1.10, pl: "+600" },
      { name: "GBPUSD", type: "SELL", lots: 2, open: 1.27, close: 1.25, pl: "+800" },
    ],
  },

  {
    name: "Quantum Trade",
    balance: "₹2,10,000",
    profit: "+15%",
    chart: [
      { name: "W1", value: 70000 },
      { name: "W2", value: 72000 },
      { name: "W3", value: 71000 },
      { name: "W4", value: 75000 },
      { name: "W5", value: 78000 },
      { name: "W6", value: 80000 },
    ],
    assets: [
      { name: "NASDAQ", type: "Index", profit: "+5000" },
      { name: "SP500", type: "Index", profit: "+4200" },
    ],
    trades: [
      { name: "NASDAQ", type: "BUY", lots: 4, open: 15000, close: 15500, pl: "+2000" },
    ],
  },

  {
    name: "Nova Signals",
    balance: "₹75,000",
    profit: "+5%",
    chart: [
      { name: "W1", value: 25000 },
      { name: "W2", value: 26000 },
      { name: "W3", value: 25500 },
      { name: "W4", value: 27000 },
      { name: "W5", value: 28000 },
    ],
    assets: [
      { name: "ETHUSD", type: "Crypto", profit: "+2200" },
    ],
    trades: [
      { name: "ETHUSD", type: "BUY", lots: 1, open: 3000, close: 3200, pl: "+200" },
    ],
  },

  {
    name: "Apex Bot",
    balance: "₹1,50,000",
    profit: "+10%",
    chart: [
      { name: "W1", value: 50000 },
      { name: "W2", value: 52000 },
      { name: "W3", value: 51000 },
      { name: "W4", value: 54000 },
      { name: "W5", value: 56000 },
    ],
    assets: [
      { name: "USDJPY", type: "Forex", profit: "+3000" },
    ],
    trades: [
      { name: "USDJPY", type: "SELL", lots: 3, open: 150, close: 148, pl: "+600" },
    ],
  },

  {
    name: "Zenith AI",
    balance: "₹3,00,000",
    profit: "+20%",
    chart: [
      { name: "W1", value: 90000 },
      { name: "W2", value: 95000 },
      { name: "W3", value: 100000 },
      { name: "W4", value: 110000 },
      { name: "W5", value: 120000 },
    ],
    assets: [
      { name: "AAPL", type: "Stock", profit: "+12000" },
      { name: "TSLA", type: "Stock", profit: "+18000" },
    ],
    trades: [
      { name: "AAPL", type: "BUY", lots: 10, open: 180, close: 200, pl: "+2000" },
    ],
  },
];

function AccountsGrid({ setSelectedAccount }) {
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
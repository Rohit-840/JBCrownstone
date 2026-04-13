
function AccountCard({ account, onClick }) {
  return (
    <div
      onClick={() => onClick(account)}
      className="bg-[#0f1a2c] p-5 rounded-xl cursor-pointer hover:scale-105 transition"
    >
      <div className="flex justify-between">
        <h2 className="text-lg font-semibold">{account.name}</h2>
        <p className="text-green-400">{account.profit}</p>
      </div>

      <p className="text-gray-400 mt-2">Balance</p>
      <p className="text-yellow-400 text-xl">
        {account.balance}
      </p>
      <button onClick={() => window.location.href = "/mt5"} className="bg-yellow-500 px-3 py-1 rounded" > View MT5 </button>
    </div>
    
    
  );
}

export default AccountCard;
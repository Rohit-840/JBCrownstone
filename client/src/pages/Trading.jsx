import { useState } from "react";
import TradingNavbar from "../components/trading/TradingNavbar" 
import AccountGrid from "../components/trading/AccountGrid";
import AssetModal from "../components/trading/AssetModal";

function Trading() {
  const [selectedAccount, setSelectedAccount] = useState(null);

  return (
    <div className="bg-[#0b0f19] min-h-screen text-white">

      <TradingNavbar />

      <AccountGrid setSelectedAccount={setSelectedAccount} />

        {selectedAccount && (
            <AssetModal
                account={selectedAccount}
                onClose={() => setSelectedAccount(null)}
            />
        )}

    </div>
  );
}

export default Trading;
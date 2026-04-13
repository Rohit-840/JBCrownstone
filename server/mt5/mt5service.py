import MetaTrader5 as mt5
import json

# CONNECT MT5
mt5.initialize()

# ACCOUNT INFO
account = mt5.account_info()

account_data = {
    "balance": account.balance,
    "equity": account.equity,
    "margin": account.margin,
    "freeMargin": account.margin_free,
    "marginLevel": account.margin_level,
}

# account_data = account._asdict()

# OPEN TRADES
positions = mt5.positions_get()
trades = []

if positions:
    for p in positions:
        trades.append({
            "symbol": p.symbol,
            "type": "BUY" if p.type == 0 else "SELL",
            "volume": p.volume,
            "profit": p.profit
        })

# HISTORY
from datetime import datetime, timedelta
date_to = datetime.now()
date_from = date_to - timedelta(days=30)  # last 30 days

history = mt5.history_deals_get(date_from, date_to)
history_data = []

if history:
    for h in history:
        history_data.append({
            "symbol": h.symbol,
            "type": "BUY" if h.type == 0 else "SELL",
            "volume": h.volume,
            "profit": h.profit
        })

# FINAL RESPONSE
data = {
    "account": account_data,
    "trades": trades,
    "history": history_data
}

print(json.dumps(data))



# def get_data():
#     account = mt5.account_info()

#     account_data = {
#         "balance": account.balance,
#         "equity": account.equity,
#         "margin": account.margin,
#         "freeMargin": account.margin_free,
#         "marginLevel": account.margin_level,
#     }

#     positions = mt5.positions_get()
#     trades = []

#     if positions:
#         for p in positions:
#             trades.append({
#                 "symbol": p.symbol,
#                 "type": "BUY" if p.type == 0 else "SELL",
#                 "volume": p.volume,
#                 "profit": p.profit
#             })

#     return {
#         "account": account_data,
#         "trades": trades
#     }

# print(json.dumps(get_data()))
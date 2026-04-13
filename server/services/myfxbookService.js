
const axios = require("axios");

let session = null;

const login = async () => {
  const res = await axios.get(
    `https://www.myfxbook.com/api/login.json?email=majakhai2003@gmail.com&password=Rohitrohit@840`
  );

  session = res.data.session;
  console.log(session);
  return session;
};

// const getOpenTrades = async () => {
//   if (!session) await login();

//   const res = await axios.get(
//     `https://www.myfxbook.com/api/get-open-trades.json?session=${session}`
//   );

//   return res.data.openTrades;
// };

const getAccounts = async () => {
  if (!session) await login();

  const res = await axios.get(
    `https://www.myfxbook.com/api/get-my-accounts.json?session=${session}`
  );

  return res.data.accounts;
};

const getHistory = async (accountId) => {
  if (!session) await login();

  const res = await axios.get(
    `https://www.myfxbook.com/api/get-history.json?session=${session}&id=${accountId}`
  );

  return res.data.history;
};

module.exports = { login, getAccounts, getHistory };
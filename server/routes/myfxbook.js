


const express = require("express");
const router = express.Router();
// const { getAccounts } = require("../services/myfxbookService");

const { getAccounts,  getHistory } = require("../services/myfxbookService");



router.get("/history/:id", async (req, res) => {
  try {
    const accountId = req.params.id;

    const data = await getHistory(accountId);
    // console.log("MYFXBOOK RAW:", data);

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/accounts", async (req, res) => {
  try {
    const data = await getAccounts();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;
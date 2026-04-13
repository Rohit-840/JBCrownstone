const express = require("express");
const router = express.Router();
const { exec } = require("child_process");

// GET MT5 DATA
router.get("/data", (req, res) => {
  exec("python mt5/mt5Service.py", (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "MT5 error" });
    }

    try {
      const data = JSON.parse(stdout);
      res.json(data);
    } catch (e) {
      res.status(500).json({ error: "Parsing error" });
    }
  });
});

module.exports = router;
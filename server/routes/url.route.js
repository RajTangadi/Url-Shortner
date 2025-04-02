import express from "express";
import shortid from "shortid";
const router = express.Router();
import URL from "../models/url.model.js";

router.post('/shorten', async (req, res) => {
  const { longUrl } = req.body;
  const shortCode = shortid.generate();
  
  try {
    let url = new URL({
      longUrl,
      shortCode
    });
    await url.save();
    res.json({ shortUrl: `http://localhost:4000/${shortCode}` });
  } catch (err) {
    res.status(500).json('Server error');
  }
});
router.get('/:shortCode', async (req, res) => {
  try {
    const url = await URL.findOne({ shortCode: req.params.shortCode });
    if (url) {
      return res.redirect(url.longUrl);
    } else {
      return res.status(404).json('No URL found');
    }
  } catch (err) {
    res.status(500).json('Server error');
  }
});

export default router;

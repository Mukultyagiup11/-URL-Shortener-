const Url = require('../models/url');
const generateAlias = require('../utils/generateAlias');
const client = require('../config/redis');

const createShortUrl = async (req, res) => {
  const { longUrl, customAlias, topic } = req.body;
  const alias = customAlias || generateAlias();
  const shortUrl = `${req.protocol}://${req.get('host')}/api/shorten/${alias}`;
  try {
    const url = new Url({
      longUrl,
      shortUrl,
      alias,
      topic,
      userId: req.user.id,
    });
    await url.save();
    await client.set(alias, longUrl); // Cache in Redis
    res.json({ shortUrl, createdAt: url.createdAt });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create short URL' });
  }
};

const redirectUrl = async (req, res) => {
  const { alias } = req.params;
  try {
    const cachedUrl = await client.get(alias);
    if (cachedUrl) {
      return res.redirect(cachedUrl);
    }
    const url = await Url.findOne({ alias });
    if (!url) return res.status(404).json({ error: 'URL not found' });
    url.clicks += 1;
    url.analytics.push({
      userAgent: req.headers['user-agent'],
      ipAddress: req.ip,
      geolocation: req.geolocation,
    });
    await url.save();
    await client.set(alias, url.longUrl); // Cache in Redis
    res.redirect(url.longUrl);
  } catch (err) {
    res.status(500).json({ error: 'Failed to redirect' });
  }
};

module.exports = { createShortUrl, redirectUrl };
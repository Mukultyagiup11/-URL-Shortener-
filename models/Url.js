const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  longUrl: { type: String, required: true },
  shortUrl: { type: String, required: true, unique: true },
  alias: { type: String, unique: true },
  topic: { type: String },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  clicks: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  analytics: [
    {
      timestamp: { type: Date, default: Date.now },
      userAgent: { type: String },
      ipAddress: { type: String },
      geolocation: { type: String },
    },
  ],
});

module.exports = mongoose.model('Url', urlSchema);
Custom URL Shortener API
A scalable API for creating short URLs with advanced analytics, user authentication via Google Sign-In, and rate limiting. Built with Node.js, MongoDB, and Redis.


Features:-
User Authentication: Google Sign-In.

URL Shortening: Create short URLs with optional custom aliases and topics.

Analytics: Track clicks, unique users, OS, and device types.

Rate Limiting: Prevent abuse of the API.

Caching: Use Redis for improved performance.

Setup
Clone the repo:
git clone https://github.com/your-username/url-shortener.git
cd url-shortener

Install dependencies:
npm install


Create a .env file:
PORT=3000
MONGO_URI=mongodb://localhost:27017/url_shortener
REDIS_URL=redis://localhost:6379
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
JWT_SECRET=your_jwt_secret
RATE_LIMIT_WINDOW=15
RATE_LIMIT_MAX=100
Start the server:
node app.js

API Endpoints
POST /api/auth/login: Authenticate with Google Sign-In.

POST /api/shorten: Create a short URL.

GET /api/shorten/{alias}: Redirect to the original URL.

GET /api/analytics/{alias}: Get analytics for a short URL.

GET /api/analytics/topic/{topic}: Get analytics for a topic.

GET /api/analytics/overall: Get overall analytics.

Technologies
Backend: Node.js, Express

Database: MongoDB

Caching: Redis

Authentication: Google Sign-In, JWT

Author
Mukul Tyagi
https://github.com/Mukultyagiup11
mt834111@gmail.com


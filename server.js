require('dotenv').config()
const Twit = require('twit');

// Create a new instance of Twit with your Twitter API keys and access tokens
const T = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

// Define a function to send a tweet
function tweet(status) {
  T.post('statuses/update', { status }, (err, data, response) => {
    if (err) {
      console.error('Error sending tweet:', err);
    } else {
      console.log('Tweet sent successfully:', data.text);
    }
  });
}

// Call the tweet function with your desired tweet text
tweet('Hello, Twitter bot!');
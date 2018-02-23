module.exports = {
  "apiKey": "hackme",
  "authDomain": "my-app-prod.firebaseapp.com",
  "databaseURL": "https://my-app-prod.firebaseio.com",
  "projectId": "my-app-prod",
  "storageBucket": "my-app-prod.appspot.com",
  "messagingSenderId": "000000000",
  "hosting": {
    "public": "public",
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}

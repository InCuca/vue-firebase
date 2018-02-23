module.exports = {
  "apiKey": "hackme",
  "authDomain": "my-app.firebaseapp.com",
  "databaseURL": "https: //my-app.firebaseio.com",
  "projectId": "my-app",
  "storageBucket": "my-app.appspot.com",
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

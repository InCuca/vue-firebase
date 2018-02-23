module.exports = {
  "apiKey": "{{api-key}}",
  "authDomain": "{{project-id}}.firebaseapp.com",
  "databaseURL": "https:{{project-id}}.firebaseio.com",
  "projectId": "{{project-id}}",
  "storageBucket": "{{project-id}}.appspot.com",
  "messagingSenderId": "{{sender-id}}",
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

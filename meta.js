const fs = require('fs');
const path = require('path');

module.exports = {
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "Project name"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "Project description",
      "default": "A Vue.js project"
    },
    "author": {
      "type": "string",
      "message": "Author"
    },
    "project-id": {
      "type": "string",
      "required": true,
      "message": "The firebase project ID"
    },
    "api-key": {
      "type": "string",
      "required": true,
      "message": "Firebase API Key"
    },
    "sender-id": {
      "type": "string",
      "required": true,
      "message": "Firebase Sender ID"
    },
  },
  "complete": function(data, {logger}) {
    logger.log("To get started:");
    logger.log("1. Install dependencies: npm install");
    logger.log("2. Build with: npm run build");
  }
};

# Vue Loopback Template

> A vue project template with support for firebase based on official webpack

## Usage

``` bash
vue init InCuca/vue-firebase my-project
```

## Configure

Add firebase settings in `config/dev.firebase.js` and `config/prod.firebase.js`

## Scripts

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Deploy

1. Install firebase-tools: `npm install -g firebase-tools`
2. Build the project with `npm run build`
3. Go to the firebase folder: `cd dist`
4. Set current project: `firebase use` or `firebase use --add`
5. To be able to send emails with your Gmail account: enable access to [Less Secure Apps](https://www.google.com/settings/security/lesssecureapps) and [Display Unlock Captcha](https://accounts.google.com/DisplayUnlockCaptcha). For accounts with 2-step verification enabled [Generate an App Password](https://support.google.com/accounts/answer/185833).
6. Set the `gmail.email` and `gmail.password` Google Cloud environment variables to match the email and password of the Gmail account used to send emails (or the app password if your account has 2-step verification enabled). For this use:
  ```bash
  firebase functions:config:set gmail.email="myusername@gmail.com" gmail.password="secretpassword"
  ```
7. Deploy your project using `firebase deploy`
8. Open the app using `firebase open hosting:site`, this will open a browser.

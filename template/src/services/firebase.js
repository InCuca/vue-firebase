import firebase from 'firebase'

const config = {
  apiKey: '{{api-key}}',
  authDomain: '{{{project-id}}}.firebaseapp.com',
  databaseURL: 'https://{{project-id}}.firebaseio.com',
  projectId: '{{project-id}}',
  storageBucket: '{{project-id}}.appspot.com',
  messagingSenderId: '{{sender-id}}',
  hosting: {
    public: 'dist',
    rewrites: [
      {
        source: '**',
        destination: '/index.html'
      }
    ]
  }
}

const config = process.env.FIREBASE

export const firebaseApp = firebase.initializeApp(config)
export const auth = firebaseApp.auth()
export default firebase

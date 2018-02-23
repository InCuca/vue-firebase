import firebase from 'firebase'

const config = process.env.FIREBASE

export const firebaseApp = firebase.initializeApp(config)
export const auth = firebaseApp.auth()
export default firebase

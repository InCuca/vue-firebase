import router from '../router'
import {auth} from '../services/firebase'
import * as types from './mutation-types'

export const signIn = ({commit}, {error, email, password}) => {
  auth.signInWithEmailAndPassword(email, password).then(user => {
    commit(types.SIGN_IN, user)
  }).catch(error)
}

// TODO: User Signup Action
// export const signUp = ({commit}, userPayload) => {
//   commit(types.SIGN_UP, userPayload)
// }

export const signOut = ({commit}, errorCallback) => {
  auth.signOut().then(() => {
    router.replace('/login')
    commit(types.SIGN_OUT)
  }).catch(errorCallback)
}

export const resetPassword = (context, {email, success, error}) => {
  auth.sendPasswordResetEmail(email).then(success).catch(error)
}

export const setEvents = ({commit}, eventsPayload) => {
  commit(types.SET_EVENTS, eventsPayload)
}

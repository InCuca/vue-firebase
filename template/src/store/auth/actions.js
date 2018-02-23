import { auth } from '@/services/firebase'
import router from '@/router'

export const signIn = ({ commit }, { email, password }) => {
  return new Promise((resolve, reject) => {
    auth.signInWithEmailAndPassword(email, password).then(resolve, reject)
  }).then(user => {
    commit('setUser', user)
    router.push('/')
  })
}

export const signUp = ({ commit }, { displayName, email, password }) => {
  return new Promise((resolve, reject) => {
    // Wrapping Promise because of .finally
    auth.createUserWithEmailAndPassword(email, password).then(resolve, reject)
  })
    .then(user => {
      // Wrapping Promise because of .finally
      return new Promise((resolve, reject) => {
        user.updateProfile({ displayName }).then(() => resolve(user), reject)
      })
    })
    .then(user => {
      commit('setUser', user)
      router.push('/dashboard')
      return user
    })
}

export const signOut = ({ commit }) => {
  return new Promise((resolve, reject) => {
    auth.signOut().then(resolve, reject)
  }).then(() => {
    router.replace('/login')
    commit('emptyUser')
  })
}

export const resetPassword = (context, email) => {
  return new Promise((resolve, reject) => {
    auth.sendPasswordResetEmail(email).then(resolve, reject)
  })
}

export const setEvents = ({ commit }, eventsPayload) => {
  commit('setEvents', eventsPayload)
}

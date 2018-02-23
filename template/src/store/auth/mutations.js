export function setUser (state, user) {
  state.user = user
}

export function emptyUser (state) {
  state.user = null
}

export function setEvents (state, eventsPayload) {
  state.events = eventsPayload
}

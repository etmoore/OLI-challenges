
type UserSession = {
  id: string,           // Unique session identifier
  userName: string,     // The user name
  durationInMs: number, // Duration of this user session, in milliseconds
  isAdminUser: boolean,
};

function fetchActiveUserSessions() : Promise<UserSession[]> {
  // Assume this asynchronously fetches active user sessions
  return Promise.resolve([]);
} 

// TODO, create a function that will calculate the total 
// duration of all sessions for admin users
function filterAdmin(sessions: UserSession[]) : UserSession[] {
  return sessions.filter(session => session.isAdminUser)
}

function sumDuration(sessions: UserSession[]) : number {
  return sessions.reduce((sum, session) => sum + session.durationInMs, 0)
}

function getTotalAdminDuration() : Promise<number> {
  return fetchActiveUserSessions()
    .then(filterAdmin)
    .then(sumDuration)
}

// TODO, create a function that will get the sessions, then
// wait a specified amount of time, then get the sessions again
// and finally count how many sessions persisted (that is, were
// present in both sets of results) between the two
// time periods

function delay(payload: any, delayInMs: number) : Promise<any> {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(payload), delayInMs)
  })
}

function intersection(array1: any[], array2: any[]) : any[] {
  return array1.filter(element1 => {
    return array2.indexOf(element1) !== -1
  })
}

function countPersistentSessions(timeBetweenInMs: number) : Promise<number> {
  return fetchActiveUserSessions()
    .then((oldSessions) => delay(oldSessions, timeBetweenInMs))
    .then((oldSessions) => {
      return fetchActiveUserSessions()
        .then(newSessions => {
          const oldIds = oldSessions.map(s => s.id)
          const newIds = newSessions.map(s => s.id)
          const persistentCount = intersection(oldIds, newIds).length
          return persistentCount
        })
    })
}
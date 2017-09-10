
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

function getTotalAdminDuration() : Promise<number> {
  return fetchActiveUserSessions()
    .then(sessions => {
      return sessions
        .filter(session => session.isAdminUser)
        .reduce((sum, adminSession) => sum + adminSession.durationInMs, 0) 
    })
}

// TODO, create a function that will get the sessions, then
// wait a specified amount of time, then get the sessions again
// and finally count how many sessions persisted (that is, were
// present in both sets of results) between the two
// time periods
function countPersistentSessions(timeBetweenInMs: number) : Promise<number> {

}


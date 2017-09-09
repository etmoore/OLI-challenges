
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
    .then((sessions) => {
      const adminSessions = sessions.filter((session) => session.isAdminUser);
      const totalAdminDuration = adminSessions.reduce((sum, session) => {
        return sum + session.durationInMs
      }, 0)
      return totalAdminDuration; 
    })
}

// TODO, create a function that will get the sessions, then
// wait a specified amount of time, then get the sessions again
// and finally count how many sessions persisted (that is, were
// present in both sets of results) between the two
// time periods
function countPersistentSessions(timeBetweenInMs: number) : Promise<number> {

}


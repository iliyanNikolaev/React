export const utils = {
    setUserData: (userData) => localStorage.setItem('auth', JSON.stringify(userData)),
    getUserData: () => JSON.parse(localStorage.getItem('auth')),
    clearUserData: () => localStorage.removeItem('auth'),
    accessTokenIsInvalid: false
}

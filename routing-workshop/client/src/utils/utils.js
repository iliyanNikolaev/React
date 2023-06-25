export const utils = {
    setUserData: (userData) => localStorage.setItem('userData', JSON.stringify(userData)),
    getUserData: () => JSON.parse(localStorage.getItem('userData')),
    clearUserData: () => localStorage.removeItem('userData')
}

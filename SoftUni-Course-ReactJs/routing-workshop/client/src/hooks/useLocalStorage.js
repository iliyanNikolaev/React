import React from "react";

export const useLocalStorage = (key, initValue) => {

    const [state, setState] = React.useState(() => {
        const localStorageItem = localStorage.getItem(key);

        if(localStorageItem) {
            const persistedState = JSON.parse(localStorageItem);

            return persistedState;
        }

        return initValue;
    });

    const setLocalStorageState = (value) => {
        setState(value);

        localStorage.setItem(key, JSON.stringify(value));
    }

    const resetLocalStorageState = () => {
        setState({});
    }

    return [
        state,
        setLocalStorageState,
        resetLocalStorageState,
    ]
}
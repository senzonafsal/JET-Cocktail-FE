import {createContext} from 'react';
import {Props} from "jet-cocktail-search/src/interfaces";

export const GlobalContext = createContext({});
export const GlobalProvider = ({children}: Props) => {
    return (
        <GlobalContext.Provider value={{} as any}>
            {children}
        </GlobalContext.Provider>
    );
}
import { createContext, useContext } from 'react';

type HelloContext = {
    run: () => void;
}

const HelloContext = createContext<HelloContext>({
    run: () => { }
});

export const useHello = () => useContext(HelloContext);

export const HelloProvider = ({ children }: { children: React.ReactNode }) => {
    const run = () => {
        console.log('Hello');
    };

    return (
        <HelloContext.Provider value={{ run }}>
            {children}
        </HelloContext.Provider>
    );
};
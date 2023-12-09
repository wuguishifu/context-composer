import { createContext, useContext } from 'react';

type WorldContext = {
    run: () => void;
}

const WorldContext = createContext<WorldContext>({
    run: () => { }
});

export const useWorld = () => useContext(WorldContext);

export const WorldProvider = ({ children }: { children: React.ReactNode }) => {
    const run = () => {
        console.log('World');
    };

    return (
        <WorldContext.Provider value={{ run }}>
            {children}
        </WorldContext.Provider>
    );
};
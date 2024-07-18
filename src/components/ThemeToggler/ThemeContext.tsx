import { createContext, useContext, useReducer } from 'react';

export interface ITheme {
    mode: string;
}

export interface IThemeAction {
    type: 'toggle';
}

const initialTheme: ITheme = {
    mode: 'light',
};

const ThemeContext = createContext<ITheme>(initialTheme);
const ThemeDispatchContext = createContext<React.Dispatch<IThemeAction> | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, dispatch] = useReducer(
        themeReducer,
        initialTheme
    );

    return (
        <ThemeContext.Provider value={theme}>
            <ThemeDispatchContext.Provider value={dispatch}>
                {children}
            </ThemeDispatchContext.Provider>
        </ThemeContext.Provider>
    );
}

export function UseTheme() {
    return useContext(ThemeContext);
}

export function UseThemeDispatch() {
    return useContext(ThemeDispatchContext);
}

function themeReducer(theme: ITheme, action: IThemeAction) {
    switch (action.type) {
        case 'toggle': {
            return {
                ...theme,
                mode: theme.mode === 'light' ? 'dark' : 'light',
            }
        }

        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}
import { createContext } from 'react'

interface ContextProps {
    entries: []; //TODO: Falta el tipo de dato del Array.
}

export const EntriesContext = createContext({} as ContextProps);
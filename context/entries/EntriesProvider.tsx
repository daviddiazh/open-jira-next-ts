import { FC, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid'
import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';


export interface EntriesState{
    entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: 'Pendiente: Lorem ipsum, dior dolor duis elit sumit ui laborum',
            status: 'pending',
            createdAt: Date.now()
        },
        {
            _id: uuidv4(),
            description: 'En Progreso: Lorem ipsum, dior dolor duis elit sumit ui laborum',
            status: 'in-progress',
            createdAt: Date.now()
        },
        {
            _id: uuidv4(),
            description: 'Terminado: Lorem ipsum, dior dolor duis elit sumit ui laborum',
            status: 'finished',
            createdAt: Date.now()
        },
    ],
}

export const EntriesProvider: FC = ({ children }) => {

    const [ state, dispatch ] = useReducer(entriesReducer, Entries_INITIAL_STATE);

    const addNewEntry = ( description: string ) => {

        const newEntry: Entry = {
            _id: uuidv4(),
            description,
            createdAt: Date.now(),
            status: 'pending'
        }

        dispatch({ type:'Entry - Add-Entry', payload: newEntry })

    }

    return (
        <EntriesContext.Provider value={{
            ...state,

            //Methods
            addNewEntry,
        }}>
            { children }
        </EntriesContext.Provider>
    )
}
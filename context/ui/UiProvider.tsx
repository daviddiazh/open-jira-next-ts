import { FC, useReducer } from 'react';
import { UIContext, uiReducer } from './';

export interface UIState{
    sidemenuOpen: boolean;
    isAddingEntry: boolean;
}

const UI_INITIAL_STATE: UIState = {
    sidemenuOpen: false,
    isAddingEntry: false,
}

export const UIProvider: FC = ({ children }) => {

    const [ state, dispatch ] = useReducer(uiReducer, UI_INITIAL_STATE);

    const openSideMenu = () => {
        dispatch({ type: 'Ui - Open sidebar' })
    }

    const closeSideMenu = () => {
        dispatch({ type: 'Ui - Close sidebar' })
    }

    const setIsAddingEntry = ( isAdding: boolean ) => {
        dispatch({ type: 'Ui - Set isAddingEntry', payload: isAdding })
    }

    return (
        <UIContext.Provider value={{
            ...state,

            //Methods
            openSideMenu,
            closeSideMenu,
            
            setIsAddingEntry,
        }}>
            { children }
        </UIContext.Provider>
    )
}
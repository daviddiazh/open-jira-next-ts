import { FC, useReducer } from 'react';
import { UIContext, uiReducer } from './';

export interface UIState{
    sidemenuOpen: boolean;
    isAddingEntry: boolean;
    isDragging: boolean;
}

const UI_INITIAL_STATE: UIState = {
    sidemenuOpen: false,
    isAddingEntry: false,
    isDragging: false
}


export const UIProvider: FC = ({ children }) => {

    const [ state, dispatch ] = useReducer(uiReducer, UI_INITIAL_STATE);

    const openSideMenu = () => {
        dispatch({ type: 'Ui - Open sidebar' });
    }

    const closeSideMenu = () => {
        dispatch({ type: 'Ui - Close sidebar' });
    }

    const setIsAddingEntry = ( isAdding: boolean ) => {
        dispatch({ type: 'Ui - Set isAddingEntry', payload: isAdding });
    }

    const startDragging = () => {
        dispatch({ type: 'Ui - Sart Dragging' });
    }

    const endDragging = () => {
        dispatch({ type: 'Ui - End Dragging' });
    }

    return (
        <UIContext.Provider value={{
            ...state,

            //Methods
            openSideMenu,
            closeSideMenu,
            
            setIsAddingEntry,

            startDragging,
            endDragging,
        }}>
            { children }
        </UIContext.Provider>
    )
}
import { UIState } from './UIProvider';

type UIActionTypes = 
|   { type: 'Ui - Open sidebar' }
|   { type: 'Ui - Close sidebar' }
|   { type: 'Ui - Set isAddingEntry', payload: boolean }

export const uiReducer = ( state: UIState, action: UIActionTypes, ): UIState => {

    switch( action.type ){
        case 'Ui - Open sidebar':
            return {
                ...state,
                sidemenuOpen: true
            }
        case 'Ui - Close sidebar':
            return {
                ...state,
                sidemenuOpen: false
            }
        case 'Ui - Set isAddingEntry':
            return {
                ...state,
                isAddingEntry: action.payload
            }
        default:
            return state;
    }

}


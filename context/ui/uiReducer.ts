import { UIState } from './UIProvider';

type UIActionTypes = 
|   { type: 'Ui - Open sidebar' }
|   { type: 'Ui - Close sidebar' }

export const uiReducer = ( state: UIState, action: UIActionTypes ): UIState => {

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
        default:
            return state;
    }

}


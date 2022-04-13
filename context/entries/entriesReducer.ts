import { EntriesState } from './';
import { Entry } from '../../interfaces';

type EntriesActionTypes = 
|   { type: 'Entry - Add-Entry', payload: Entry }

export const entriesReducer = ( state: EntriesState, action: EntriesActionTypes ): EntriesState => {

    switch( action.type ){
       case 'Entry - Add-Entry':
           return {
               entries: [ ...state.entries, action.payload ]
           }

       default:
           return state;
    }

}

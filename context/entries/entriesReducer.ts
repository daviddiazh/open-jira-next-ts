import { EntriesState } from './';

type EntriesActionTypes = 
|   { type: 'Entries - ActionType' }

export const entriesReducer = ( state: EntriesState, action: EntriesActionTypes ): EntriesState => {

    switch( action.type ){
       case 'Entries - ActionType':
           return {
               ...state,
           }

       default:
           return state;
    }

}
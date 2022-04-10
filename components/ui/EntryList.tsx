import { List, Paper } from '@mui/material'
import React, { FC, useMemo } from 'react'
import { EntryCard } from './EntryCard'
import { EntryStatus } from '../../interfaces/entry';
import { useContext } from 'react';
import { EntriesContext } from '../../context/entries';

interface Props {
    status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {

  const { entries } = useContext( EntriesContext );

  const entriesByStatus = useMemo( () => entries.filter( entries => entries.status === status ), [ entries ] )

  return (
    <div>
        <Paper sx={{ height: 'calc(100vh - 180px)', overflow: 'scroll', backgroundColor: 'transparent', padding: '5px 10px' }}>
            <List sx={{ opacity: '1' }}>
                {
                    entriesByStatus.map( entry => (
                        <EntryCard key={ entry._id } entry={ entry } />
                    ))
                }
            </List>
        </Paper>
    </div>
  )
}

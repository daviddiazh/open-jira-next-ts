import { List, Paper } from '@mui/material'
import React, { FC } from 'react'
import { EntryCard } from './EntryCard'

export const EntryList: FC = () => {
  return (
    <div>
        <Paper sx={{ height: 'calc(100vh - 180px)', overflow: 'scroll', backgroundColor: 'transparent', padding: '5px 10px' }}>
            <List sx={{ opacity: '1' }}>
                <EntryCard />
                <EntryCard />
                <EntryCard />
                <EntryCard />
            </List>
        </Paper>
    </div>
  )
}

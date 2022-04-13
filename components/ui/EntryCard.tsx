import React, { FC, DragEvent } from 'react'
import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import { Entry } from '../../interfaces/entry';

interface Props {
    entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {

    const onDragStart = ( event: DragEvent ) => {
        event.dataTransfer.setData('text', entry._id)
    }

    const onDragEnd = () => {
        //TODO: Fin on Drag.
    }

  return (
    <Card
        sx={{ marginBotom: 1, margin: '10px 0px' }}
        //Eventos Drag And Drop
        draggable
        onDragStart={ onDragStart }
        onDragEnd={ onDragEnd }
    >
        <CardActionArea>
            <CardContent>
                <Typography sx={{ whiteSpace: 'pre-line' }}>{ entry.description }</Typography>
            </CardContent>

            <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
                <Typography variant='body2'>Hace 30 minutos</Typography>
            </CardActions>
        </CardActionArea>
    </Card>
  )
}

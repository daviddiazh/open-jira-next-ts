import React, { FC, DragEvent, useContext } from 'react'
import { useRouter } from 'next/router';
import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import { Entry } from '../../interfaces/entry';
import { UIContext } from '../../context/ui/UIContext';
import { dateFunctions } from '../../utils/'

interface Props {
    entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {

    const { startDragging, endDragging } = useContext( UIContext )
    const router = useRouter();

    const onDragStart = ( event: DragEvent ) => {
        event.dataTransfer.setData('text', entry._id)

        startDragging();
    }

    const onDragEnd = () => {
        endDragging();
    }

    const onClick = () => {
        router.push(`/entries/${entry._id}`)
    }

  return (
    <Card
        sx={{ marginBotom: 1, margin: '10px 0px' }}
        //Eventos Drag And Drop
        draggable
        onDragStart={ onDragStart }
        onDragEnd={ onDragEnd }
        onClick={ onClick }
    >
        <CardActionArea>
            <CardContent>
                <Typography sx={{ whiteSpace: 'pre-line' }}>{ entry.description.length > 50 ? entry.description.substring(0, 50) + '...' : entry.description }</Typography>
            </CardContent>

            <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
                <Typography variant='body2'>{`${ dateFunctions.getFortmatDistanceToNow( entry.createdAt ) }`}</Typography>
            </CardActions>
        </CardActionArea>
    </Card>
  )
}

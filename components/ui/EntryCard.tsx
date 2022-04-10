import React, { FC } from 'react'
import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';

export const EntryCard: FC = () => {
  return (
    <Card
        sx={{ marginBotom: 1, margin: '10px 0px' }}
    >
        <CardActionArea>
            <CardContent>
                <Typography sx={{ whiteSpace: 'pre-line' }}>Esta es la descripción</Typography>
            </CardContent>

            <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
                <Typography variant='body2'>Hace 30 minutos</Typography>
            </CardActions>
        </CardActionArea>
    </Card>
  )
}

import { FC, useContext } from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { UIContext } from '../../context/ui/UIContext';

export const Navbar: FC = () => {

  const { openSideMenu } = useContext( UIContext )

  return (
    <AppBar position='sticky' elevation={ 8 }>
        <Toolbar>
            <IconButton 
                size='large'
                edge='start'
                onClick={ openSideMenu }
            >
                <MenuOutlinedIcon />
            </IconButton>
            <Typography variant='h6'>OpenJira - DDH</Typography>
        </Toolbar>
    </AppBar>
  )
}

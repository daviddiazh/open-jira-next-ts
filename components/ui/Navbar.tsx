import { FC, useContext } from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { UIContext } from '../../context/ui/UIContext';

export const Navbar: FC = () => {

  const { openSideMenu } = useContext( UIContext )

  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const currentDateTime = new Date();

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
            {/* {<Typography variant='h6'>OpenJira - DDH</Typography>} */}
            <Typography>{currentDateTime.toLocaleDateString('es-ES', options)}.</Typography>
        </Toolbar>
    </AppBar>
  )
}

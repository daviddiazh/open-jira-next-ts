import { useContext } from "react";
import { Box, CardMedia, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, } from "@mui/material"
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { UIContext } from '../../context/ui';
import logoIMG from './../../public/cropped-trans.png';


const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts']


export const Sidebar = () => {

    const { sidemenuOpen, closeSideMenu } = useContext( UIContext )

    const currentYear = new Date();

  return (
    <Drawer
        anchor="left"
        open={ sidemenuOpen }
        onClose={ closeSideMenu }
    >

        <Box sx={{ width: 250 }}>

            <Box sx={{ padding: '50px 0px 10px 0px' }}>
                {<Typography variant="h4" style={{textAlign: 'center'}}>Menu</Typography>} 
                {/* {<Image src={logoIMG} alt='Logo' />} */}
            </Box>

            <List>
                {
                    menuItems.map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index % 2 ? <InboxOutlinedIcon /> : <EmailOutlinedIcon /> }
                            </ListItemIcon>
                            <ListItemText primary={ text } />
                        </ListItem>
                    ))
                }
            </List>

            <Divider />

            <List>
                {
                    menuItems.map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index % 2 ? <InboxOutlinedIcon /> : <EmailOutlinedIcon /> }
                            </ListItemIcon>
                            <ListItemText primary={ text } />
                        </ListItem>
                    ))
                }
            </List>

            <Box sx={{ margin: '40px 0px 10px 0px' }}>
                <Typography variant="h6" style={{textAlign: 'center'}}>Powered By: David Diaz H</Typography>
                <Typography variant="body1" style={{textAlign: 'center'}}>{currentYear.getFullYear()}.</Typography>
            </Box>

        </Box>

    </Drawer>
  )
}

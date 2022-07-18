import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableTemporaryDrawer from './Drawer';
import Link from 'next/link';

export default function NavBar(props) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar style={{backgroundColor:'transparent'}} position="fixed">
                <Toolbar>
                    <Link passHref={true} href={'/'}>
                        {/* <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton> */}
                    <Typography className='pointer' variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Scripts Hypno
                    </Typography>
                    </Link>
                   
                        
                   
                    <Button color="inherit">Login</Button>
                    <SwipeableTemporaryDrawer />
                </Toolbar>
            </AppBar>
        </Box>
    );
}

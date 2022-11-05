import React from 'react'
import ResponsiveDrawer from '../Components/sidebar/SideBarResponsive'
import { Box } from "@mui/system";
import CardContainer from '../Components/Cards/CardContainer';

const HomePage = () => {

    const drawerWidth = 240;

    return (
        <>
            <ResponsiveDrawer />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 2,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
               <CardContainer/>
            </Box>
        </>
    )
}

export default HomePage
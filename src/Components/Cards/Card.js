import * as React from 'react';
import { Box } from "@mui/system";
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";

const Card = () => {
    return (
        <>
            <Paper square={true}
                sx={{
                    mt: 2,
                    maxWidth: 782,
                    height: 76,
                    flexGrow: 1,
                    backgroundColor: '#ffffff',
                    boxShadow: 0,
                    borderRadius: 3,
                    pb: 0,
                    border: 1,
                    borderColor: '#e5e5e5',
                }}
            >

            </Paper>
        </>
    )
}

export default Card
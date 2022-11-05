import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const CardContainer = () => {

    return (
        <>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={3}>
                    {[0, 1, 2, 3, 4, 5].map((value) => (
                        <Grid key={value} item>
                            <Paper
                                sx={{
                                    height: 300,
                                    width: 300,
                                }}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </>
    )
}

export default CardContainer
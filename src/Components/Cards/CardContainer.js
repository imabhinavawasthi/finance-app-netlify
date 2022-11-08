import React from 'react'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from './Card';

const CardContainer = ({array}) => {

    return (
        <>
            <Grid item xs={12} mt={3} justifyContent="center">
                <Box justifyContent="center" alignItems="center">
                    {/* <SearchBox onChangeHandler={onSearchChange} /> */}
                </Box>
                <Grid container justifyContent="center" spacing={3}>
                    {array.map((ele) => (
                        <Grid key={ele.id} item>
                            <Paper
                                sx={{
                                    height: "auto",
                                    width: "auto",
                                }}
                            >
                                <Card ele={ele}/>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </>
    )
}

export default CardContainer
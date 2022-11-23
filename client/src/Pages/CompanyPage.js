import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { Box } from '@mui/system';
import axios from 'axios';
import { Skeleton, Typography } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
      ].join(','),
    },
  });

const CompanyPage = () => {

    const params = useParams();

    const [comp, setComp] = useState([])

    const getComp = async () => {
        try {
            const res = await axios.get(`https://api.aletheiaapi.com/StockData?symbol=${params.symbol}&key=E6D85BFBD90E44F4B94E95D3CA7AE9CF&Accept-Version=2`)
            setComp(res.data)
            console.log(res);
        } catch (err) {
            alert(err.message);
        }
    }

    useEffect(() => {
        getComp();
    }, []);

    return (
        <>
            <Box display="flex" flexDirection="column" sx={{ mt: 5 }}>
                <Box>
                    <Grid container alignItems="center" justifyContent="center">
                        <Grid item >
                            <Tooltip arrow title={
                                <Box display="flex" flexDirection="column">
                                    <Box>
                                        <Typography sx={{ fontWeight: "500" }} variant="body2" >
                                            Sector: {comp.Sector}
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography sx={{ fontWeight: "500" }} variant="body2" >
                                            Industry: {comp.Industry}
                                        </Typography>
                                    </Box>
                                </Box>
                            }
                                placement="right"
                                componentsProps={{
                                    tooltip: {
                                        sx: {
                                            bgcolor: '#4d5d53',
                                            height: 56,
                                            margin: "auto",
                                            '& .MuiTooltip-arrow': {
                                                color: '#4d5d53',
                                            },
                                        },
                                    },
                                }}>
                                <Box>
                                    {comp.length === 0 ? <Skeleton variant="rectangular" width={400} height={60} /> : <ThemeProvider theme={theme}><Typography sx={{ ml: {xs: 0, sm: 1}, mr: 0.5, fontWeight: "600", fontSize: "40px" }} variant="h2" color="black">
                                        {comp.LongName}
                                    </Typography></ThemeProvider>}

                                </Box>
                            </Tooltip>
                        </Grid>
                        <Grid item xs>
                            <Grid container direction="row-reverse">
                                <Grid item>
                                    <Typography sx={{mr: {xs: 1, sm: 5}, fontWeight: "500" }} variant="body1" color="black">
                                        Number of shares you own: <strong>5</strong>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Box>
                company {params.symbol}
            </Box>
        </>
    )
}

export default CompanyPage



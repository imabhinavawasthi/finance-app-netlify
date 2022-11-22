import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { Box } from '@mui/system';
import axios from 'axios';
import { Typography } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';

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
                    <Box display="flex" flexDirection="row-reverse" alignItems="center">
                        <Box>
                            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="flex-end">
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
                                placement="left"
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
                                        <Typography sx={{ ml: 2, mr: 0.5, fontWeight: "600" }} variant="h2" color="black">
                                            <i>{comp.LongName}</i>
                                        </Typography>
                                    </Box>
                                </Tooltip>
                                <Box>
                                    <Typography sx={{ ml: 2, mr: 0.5, fontWeight: "500" }} variant="h6" color="black">
                                        No. of shares: <strong>5</strong>
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                company {params.symbol}
            </Box>

        </>
    )
}

export default CompanyPage
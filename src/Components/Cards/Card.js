import * as React from 'react';
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import { Button } from '@mui/material';
import Chip from '@mui/material/Chip';

const Card = ({ ele }) => {
    return (
        <>
            <Box display="flex" flexDirection="column" p={1} m={1} justifyContent="center" alignItems="center">
                <Box m={1} component="img" sx={{
                    height: 30,
                    width: 70,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    borderRadius: 1,
                }}
                    alt="image"
                    src={ele.imageUrl}>
                </Box>
                <Box m={1}>
                    <Typography sx={{ ml: 2, mr: 0.5, fontWeight: "500" }} variant="body1" color="black">
                        {ele.name}
                    </Typography>
                </Box>
                <Box m={1}>
                    <Typography sx={{ ml: 2, mr: 0.5, fontWeight: "500" }} variant="caption" color="black">
                        Industry: <Chip style={{size:'1em'}} label={ele.industry} variant="outlined" />
                    </Typography>
                </Box>
                <Box m={1}>
                    <Typography sx={{ ml: 2, mr: 0.5, fontWeight: "500" }} variant="caption" color="black">
                        Sector: <Chip style={{size:'1em'}} label={ele.sector} variant="outlined" />
                    </Typography>
                </Box>
                <Box m={1}>
                    <Typography sx={{ ml: 2, mr: 0.5, fontWeight: "500" }} variant="h5" color="black">
                        {ele.revenue}
                    </Typography>
                </Box>
                <Box m={1}>
                    <Button variant="contained">Learn more</Button>
                </Box>
            </Box>
        </>
    )
}

export default Card
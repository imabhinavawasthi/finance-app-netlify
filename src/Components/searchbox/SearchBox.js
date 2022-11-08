import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const SearchBox = ({ onChangeHandler }) => {

    return (
        <div>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                margin="auto"
            >
                <TextField id="outlined-basic" label="Search..." variant="outlined" onChange={onChangeHandler} />
            </Box>
        </div>
    )
}

export default SearchBox
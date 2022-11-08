import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SearchBox from '../searchbox/SearchBox';
import Box from '@mui/material/Box';

const data = [
    {
        id: 1,
        name: 'Priyanshi'
    },
    {
        id: 2,
        name: 'Abhinav'
    },
    {
        id: 3,
        name: 'Aditi'
    },
    {
        id: 4,
        name: 'Avinash'
    },
    {
        id: 5,
        name: 'Arjun'
    },
    {
        id: 6,
        name: 'Preetika'
    },

]

const CardContainer = () => {

    const [searchField, setSearchField] = useState('')
    const [filteredData, setFilteredData] = useState(data)

    useEffect(() => {
        const newFilteredData = data.filter((ele) => {
            return ele.name.toLocaleLowerCase().includes(searchField);
        })

        setFilteredData(newFilteredData)
    }, [searchField])


    const onSearchChange = (event) => {

        const searchFieldString = event.target.value.toLocaleLowerCase();

        setSearchField(searchFieldString)
    }

    return (
        <>
            <Grid item xs={12} mt={3} justifyContent="center">
                <Box justifyContent="center" alignItems="center">
                    <SearchBox onChangeHandler={onSearchChange} />
                </Box>
                <Grid container justifyContent="center" spacing={3}>
                    {filteredData.map((ele) => (
                        <Grid key={ele.id} item>
                            <Paper
                                sx={{
                                    height: 300,
                                    width: 300,
                                }}
                            >
                                {ele.name}
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </>
    )
}

export default CardContainer
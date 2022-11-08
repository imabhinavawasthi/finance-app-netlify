import React, { useEffect, useState } from 'react'
import ResponsiveDrawer from '../Components/sidebar/SideBarResponsive'
import { Box } from "@mui/system";
import CardContainer from '../Components/Cards/CardContainer';

const data = [
    {
        id: 1,
        name: 'Google',
        imageUrl: "https://www.freepnglogos.com/uploads/google-logo-png/file-google-logo-svg-wikimedia-commons-23.png",
        industry: "Software",
        sector: "IT services and consultancy",
        revenue: "7386 million $"
    },
    {
        id: 2,
        name: 'Microsoft',
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWyJKbHBwzRipNmCD02eEbNxS1DbbgriE48nrWsmNL77mQ3R2z&s",
        industry: "Software",
        sector:  "Products",
        revenue: "7386 million $"
    },
    {
        id: 3,
        name: 'Google',
        imageUrl: "https://www.freepnglogos.com/uploads/google-logo-png/file-google-logo-svg-wikimedia-commons-23.png",
        industry: "Software",
        sector: "IT services and consultancy",
        revenue: "7386 million $"
    },
    {
        id: 4,
        name: 'Microsoft',
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWyJKbHBwzRipNmCD02eEbNxS1DbbgriE48nrWsmNL77mQ3R2z&s",
        industry: "Software",
        sector:  "Products",
        revenue: "7386 million $"
    },
    {
        id: 5,
        name: 'Google',
        imageUrl: "https://www.freepnglogos.com/uploads/google-logo-png/file-google-logo-svg-wikimedia-commons-23.png",
        industry: "Software",
        sector: "IT services and consultancy",
        revenue: "7386 million $"
    },
    {
        id: 6,
        name: 'Microsoft',
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWyJKbHBwzRipNmCD02eEbNxS1DbbgriE48nrWsmNL77mQ3R2z&s",
        industry: "Software",
        sector:  "Products",
        revenue: "7386 million $"
    },
    {
        id: 7,
        name: 'Google',
        imageUrl: "https://www.freepnglogos.com/uploads/google-logo-png/file-google-logo-svg-wikimedia-commons-23.png",
        industry: "Software",
        sector: "IT services and consultancy",
        revenue: "7386 million $"
    },
    {
        id: 8,
        name: 'Microsoft',
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWyJKbHBwzRipNmCD02eEbNxS1DbbgriE48nrWsmNL77mQ3R2z&s",
        industry: "Software",
        sector:  "Products",
        revenue: "7386 million $"
    },
    {
        id: 9,
        name: 'Google',
        imageUrl: "https://www.freepnglogos.com/uploads/google-logo-png/file-google-logo-svg-wikimedia-commons-23.png",
        industry: "Software",
        sector: "IT services and consultancy",
        revenue: "7386 million $"
    },
    {
        id: 10,
        name: 'Microsoft',
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWyJKbHBwzRipNmCD02eEbNxS1DbbgriE48nrWsmNL77mQ3R2z&s",
        industry: "Software",
        sector:  "Products",
        revenue: "7386 million $"
    },
]

const HomePage = () => {

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

    const drawerWidth = 240;
    const topHeight = 60;

    return (
        <>
            <ResponsiveDrawer onChangeHandler={onSearchChange} />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 2,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    height: { sm: `calc(100% - ${topHeight}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    mt: {xs: `${topHeight+50}px`, sm: `${topHeight}px` },
                }}
            >
                <CardContainer array={filteredData} />
            </Box>
        </>
    )
}

export default HomePage
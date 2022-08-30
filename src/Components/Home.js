import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import axios from 'axios'
import configInfo from '../Config/config'
import { Snackbar, Alert, Grid, CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import DishCard from './DishCard';

const Home = () => {

    const [state, setState] = useState({
        dishes: [],
        loading: false
    })

    useEffect(() => {
        performAPICall();
    }, [])

    const performAPICall = async () => {
        setState((preState) => ({
            ...preState,
            loading: true
        }))
        await axios
            .get(configInfo.DISHES_URL)
            .then((response) => {
                setState((preState) => ({
                    ...preState,
                    dishes: response.data,
                    loading: false
                }))
            })
            .catch(() => {
                console.log("error");
                <Snackbar open={true} autoHideDuration={5000}>
                    <Alert severity='error'>
                        "Something Went Wrong!!!"
                    </Alert>
                </Snackbar>
                setState((preState) => ({
                    ...preState,
                    loading: false
                }))
            })
    }

    return (
        <>
            <Navbar />
            <Box sx={{ m: 2 }}>
                {state.loading ? (
                    <Grid
                        container
                        justifyContent='center'
                        alignItems='center'
                        direction='column'
                    >
                        <Grid item>
                            <CircularProgress
                                disableShrink
                                size={40}
                                color='info'
                            />
                        </Grid>
                        <Grid item>
                            <div>Loading Dishes...</div>
                        </Grid>
                    </Grid>
                ) : (
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                        {state.dishes.map(dish => (
                            <Grid item xs={4} key={dish.id}>
                                <DishCard dish={dish} />
                            </Grid>
                        ))}
                    </Grid>)}
            </Box>
        </>
    )
}

export default Home
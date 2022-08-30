import React, { useState } from 'react'
import Navbar from './Navbar'
import { Button, TextField, Stack } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import './Login.css'

const Login = () => {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState({
        username: "",
        password: "",
    });
    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value,
        });
    };
    axios.get('/users.json').then(res => {
        setUsers(res.data)
    })
    return (
        <>
            <Navbar />
            <Box className="content" sx={{ m: 2 }}>
                <Stack spacing={2} className="form">
                    <h2 className="title">Login</h2>
                    <TextField
                        id="username"
                        label="Username"
                        variant="outlined"
                        title="Username"
                        name="username"
                        placeholder="Enter Username"
                        fullWidth
                        onChange={handleChange}
                    />
                    <TextField
                        id="password"
                        label="Password"
                        variant="outlined"
                        title="Password"
                        name="password"
                        type="password"
                        placeholder="Enter Password"
                        fullWidth
                        onChange={handleChange}
                    />
                    <Button
                        className="button"
                        variant="contained"
                    >
                        Login to Dish-Poll
                    </Button>
                </Stack>
            </Box>
        </>
    )
}

export default Login
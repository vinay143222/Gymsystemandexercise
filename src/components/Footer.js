import React from 'react'
import {Box,Stack,Typography} from '@mui/material';
import Logo from '../assets/images/Logo.png';
export default function Footer() {
    return (
        <Box mt="80" bgcolor="#fff3f4">
            <Stack gap="40px" alignItems="center" px="40px" pt="24px">
            <img src={Logo} alt="logo" width="100px" height="40px"/>
            <Typography variant="h5" pb="40px" mt="20px">
                Created By V I N I
            </Typography>
            </Stack>
        </Box>
    )
}

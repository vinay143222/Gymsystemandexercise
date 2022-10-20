import React from 'react'
import {Stack,Box,Typography,Button} from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';
import { Link } from 'react-router-dom';
export default function HeroBanner() {
    return (
       <Box sx={{mt:{lg:'20px',xs:'70px'},ml:{sm:'50px'}}}position="relative" p="20px">
        <Typography color="#FF2625" fontWeight="600" fontSize="26px">
            Fitness Club
        </Typography>
        <Typography fontWeight={700} sx={{fontSize:{lg:'40px',xs:'40px'}}} mb="20px" mt="30px">
            Sweat,Smile <br/>  and Repeat
        </Typography>
        <Typography fontSize="22px" lineHeight="35px" mb={4}>
          Check out the most effective exercises
        </Typography>
    <Link to="/exercise" style={{textDecoration:'none'}}><Button variant="contained" color="error"  sx={{backgroundColor:'#FF2526',padding:'10px'}}>Explore Exercises</Button></Link>  
         <Typography
          fontWeight={600}
         color="#FF2526"
          sx={{opacity:0.1,display:{lg:"block",xs:'none'}}} fontSize='200px'>
            Exercise
        </Typography>
        <img src={HeroBannerImage} alt="banner" className="hero-banner-img"/>
       </Box>
    )
}

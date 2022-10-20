import React, { useState } from 'react';
import {Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';
import Footer from '../components/Footer';
function Home() {
     const [exercises,setexercises]=useState([]);
     const [bodypart,setbodypart]=useState('all');
    return (
       
       <Box>
        <HeroBanner/>
        <SearchExercises 
        setexercises={setexercises} 
        bodypart={bodypart} 
        setbodypart={setbodypart}/>
        <Exercises setexercises={setexercises} 
        bodypart={bodypart} 
        exercises={exercises}/>
        <Footer/>
       </Box>
       
    )
}

export default Home

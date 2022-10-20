import React, { useState } from 'react';
import { useEffect } from 'react';
import { exercisesOptions, fetchdata } from '../utils/fetchdata';
import {Stack,Button,Typography,Box} from '@mui/material';
import ExercisesCard from './ExercisesCard';
import Loading from './Loading';
import Footer from './Footer';

export default function ExercisesList() {
   
     const [exercises,setexercises]=useState([]);
    useEffect(()=>{
      const fetchdataexercises=async()=>{
       const exercisesdata=await fetchdata('https://exercisedb.p.rapidapi.com/exercises',exercisesOptions);
         setexercises(exercisesdata);
      }
      fetchdataexercises();
    },[]);
      

    return (
        <Box>
  <Stack direction="row"
                sx={{gap:{lg:'110px',xs:'50px'}}} flexWrap="wrap" justifyContent="center" mt="20px">
                  { !exercises.length? <Loading/>: exercises.slice(0,50).map((exercise,index)=>(<ExercisesCard key={index} exercise={exercise}/>))}
                   
                </Stack>
                <Footer/>
                </Box>
            
       
    )
}

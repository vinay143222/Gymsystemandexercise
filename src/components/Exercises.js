import React, { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination';
import {Box,Stack,Typography} from '@mui/material';
import { exercisesOptions,fetchdata } from '../utils/fetchdata';
import ExercisesCard from './ExercisesCard';

export default function Exercises({exercises,setexercises,bodypart}) {
 const [currentpage,setcurrentpage]=useState(1);
const exercisesPerPage=9;
const indexOfLastExercises=currentpage*exercisesPerPage;
const indexOfFirstExercises=indexOfLastExercises-exercisesPerPage;
const currentExercises=exercises.slice(indexOfFirstExercises,indexOfLastExercises);
useEffect(()=>{
const fetchexercisedata=async()=>{
    let exercisesdata=[];
    if(bodypart==='all')
    {
         exercisesdata=await fetchdata('https://exercisedb.p.rapidapi.com/exercises',exercisesOptions);
    }
    else
    {
        exercisesdata=await fetchdata(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodypart}`,exercisesOptions);
    }
    setexercises(exercisesdata);
}
fetchexercisedata();
},[bodypart])
const paginate =(e,value)=>{
  setcurrentpage(value);
  window.scrollTo({top:'1800',behavior:'smooth'});
}
    return (
       <Box id="exercises"
               sx={{mt:{lg:'110px'}}}
               mt="500px"
               p="20px">
                <Typography variant="h4" mb="4">Showing Results</Typography>
                <Stack direction="row"
                sx={{gap:{lg:'110px',xs:'50px'}}} flexWrap="wrap" justifyContent="center">
                  {currentExercises.map((exercise,index)=>(<ExercisesCard key={index} exercise={exercise}/>))}
                </Stack>
              <Stack mt="100px" alignItems="center">
                       {exercises.length>9 &&(
                        <Pagination color="standard" shape="rounded" defaultPage={1}
                         count={Math.ceil(exercises.length)}
                         page={currentpage}
                         onChange={paginate}
                         size="large"/>
                       )}
              </Stack>
       </Box>
    )
}

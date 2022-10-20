import React from 'react';
import {Box,Stack,Typography} from '@mui/material';
import HorizontalScrollbar from './Horizontal';
import Loading from './Loading';
export default function SimilarExercise({targetMuscleExercise,equipmentExercises}) {
    return (
        <Box sx={{mt:{lg:'100px',xs:'0'}}}>
            <Typography variant="h3">Exercises that target the same muscle group</Typography>
            <Stack direction="row" sx={{p:'2',position:'relative'}}>
             {targetMuscleExercise.length ? 
             <HorizontalScrollbar data={targetMuscleExercise}/>:<Loading/>
             }
            </Stack>
        </Box>
    )
}

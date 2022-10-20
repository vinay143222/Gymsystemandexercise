import React,{useEffect, useState} from 'react';
import {Box,Button,Typography,TextField,Stack}from '@mui/material';
import HorizontalScrollbar from '../components/Horizontal';
import { exercisesOptions,fetchdata } from '../utils/fetchdata';
export default function SearchExercises({bodypart,setbodypart,setexercises}) {

    const [search,setsearch]=useState("");
   
    const [bodyparts,setbodyparts]=useState([]);
    useEffect(()=>{
          const fetchexercisedata=async()=>{
           const bodyPartsData=await fetchdata('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exercisesOptions);
                setbodyparts(['all',...bodyPartsData]);
          }
          fetchexercisedata();
    },[])
    const handleSeacrh= async()=>{
     if(search)
     {
        const exerciseData=await fetchdata('https://exercisedb.p.rapidapi.com/exercises',exercisesOptions);
          const searchedExercises=exerciseData.filter((exercise)=>
          exercise.name.toLowerCase().includes(search)||
          exercise.target.toLowerCase().includes(search)||
          exercise.equipment.toLowerCase().includes(search)||
           exercise.bodyPart.toLowerCase().includes(search));
           setsearch('');
           setexercises(searchedExercises);
     }
    }
    return (
        <Stack alignItems="center" mt="120px" justifyContent="center" p="20px">
          <Typography fontWeight={700}
           sx={{fontSize:{lg:"44px" ,xs:'30px'}}}
            mb="50px" textAlign="center">Awesome Exercises you <br/>Should Know
            </Typography>
            <Box position="relative" mb="72px">
              <TextField height="76px" 
              sx={{input:{fontWeight:'700',
              border:'none',
              borderRadius:'4px'},
              width:{lg:'800px',xs:'350px'},
              backgroundColor:'white'
              }}
              onChange={(e)=>setsearch(e.target.value.toLowerCase())} 
              value={search} 
              placeholder='search exercises' 
              type="text"/>
              <Button className="search-btn"
              sx={{bgcolor:'#FF2625',color:'white',textTransform:'none',widht:{lg:'200px',xs:'80px'},
            fontSize:{lg:'25px',xs:'14px'},
               height:'60px',
            position:'absolute',
       }}
            onClick={handleSeacrh}  > Search</Button>
            </Box>
            <Box sx={{position:'relative',width:'100%',p:'20px'}}>
                <HorizontalScrollbar data={bodyparts} bodyparts bodypart={bodypart} setbodypart={setbodypart}/>
            </Box>
        </Stack>
    )
}

import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import {Box} from '@mui/material';
import {exercisesOptions,fetchdata,youtubeOptions} from '../utils/fetchdata';
import Detail from '../components/Detail';
import ExerciseVideo from '../components/ExerciseVideo';
import SimilarExercise from '../components/SimilarExercise';
import Footer from '../components/Footer';

function ExerciseDetail() {
    const [exerciseDetail,setexerciseDetail]=useState({});
    const [exerciseVideos,setexerciseVideos]=useState([]);
    const [targetMuscleExercise,setTargetMuscleExercis]=useState([]);
    const [equipmentExercises,setEquipmentExercises]=useState([]);
    const {id}=useParams();
    useEffect(()=>{
        const fetchexercisedata=async()=>{
           const exerciseDbUrl='https://exercisedb.p.rapidapi.com';
           const youtubeSearchUrl='https://youtube-search-and-download.p.rapidapi.com';
               const exerciseDetailData= await fetchdata(`${exerciseDbUrl}/exercises/exercise/${id}`,exercisesOptions);
               setexerciseDetail(exerciseDetailData);
               const exerciseVideos=await fetchdata(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,youtubeOptions);
               setexerciseVideos(exerciseVideos.contents);
               const targetMuscleExerciseData=await fetchdata(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,exercisesOptions);
               setTargetMuscleExercis(targetMuscleExerciseData);
                const equipmentExercisesData=await fetchdata(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,exercisesOptions);
                setEquipmentExercises(equipmentExercisesData);
               
        }
        fetchexercisedata();
    },[id])
    return (
        <Box>
            <Detail exerciseDetail={exerciseDetail}/>
            <ExerciseVideo exerciseVideos={exerciseVideos}name={exerciseVideos.name}/>
            <SimilarExercise targetMuscleExercise={targetMuscleExercise} equipmentExercises={equipmentExercises}/>
            <Footer/>
        </Box>
    )
}

export default ExerciseDetail

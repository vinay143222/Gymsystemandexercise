import React from 'react'
import {Stack,Typography} from '@mui/material';
import Icon from '../assets/icons/gym.png';
export default function BodyPart({item,bodypart,setbodypart}) {
    return (
        <Stack type="button" 
        alignItems="center" 
        justifyContent="center"
         className="bodyPart-card"
          sx={ { borderTop:bodypart===item ?'4px solid #ff2526':'',
            
                borderTop:'4ps solid #ff2526',
                backgroundColor:'white',
                borderBottomLeftRadius:'20px',
                width:"270px",
                height:'280px',
                cursor:'pointer',
                gap:'47px'
            }}
            onClick={()=>{
                setbodypart(item);
                window.scrollTo({top:'1800',left:'100',behavior:'smooth'})
            }}>
            <img src={Icon} alt="gym" className="body-part-icon" style={{width:'40px',height:'40px'}}/>
            <Typography fontSize="20px" fontWeight="bold" color="#3A1212" textTransform="capitalize">{item}</Typography>
        </Stack>
    )
}

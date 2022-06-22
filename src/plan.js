import React, { useEffect, useState } from 'react'
import './plan.css'
import { HeaderUNL } from './components/headers/headerUNL'
import { TeacherInstructions } from './components/layout/teacherInstructions/teacherInstructions';
import { InitialConfiguration } from './components/layout/initialConfiguration/initialConfiguration';




export const Plan = () => {
  
  const [getChange , setChange] = useState(1)
  const [getTeacherIntruction, setTeacherIntruction] = useState(true)
  const [getInitialConfiguration, setInitialConfiguration] = useState(false)
  //use Effect REndderizaado CoNDICIONAL
  useEffect(()=>{
    switch(getChange){
      case 1:
        setTeacherIntruction(true);
        setInitialConfiguration(false);
        break;
      case 2:
        setTeacherIntruction(false);
        setInitialConfiguration(true);
          
    }
  },[getChange]);

  return (
    <>
    <div>
      <HeaderUNL></HeaderUNL>    
    </div>

    <div>
      {
        getTeacherIntruction?<TeacherInstructions change = {setChange}/>:null
      }
    </div>


    <div className='divInitialConf'>
      {
        getInitialConfiguration?<InitialConfiguration/>:null
      }
    </div>

    </>

   
  )
}

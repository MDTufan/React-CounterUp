
import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const CouterUp = () => {

const [Counter,setCounter]=useState(false);






  return (
    <div className='xx'>
      <h1 className=''>Couter</h1>

      <div className="">

      <ScrollTrigger onEnter={()=>setCounter(true)} onExit={()=>setCounter(false)} >
            <h1 className='ff'>{
              Counter &&  <CountUp start={0} end={100} duration={2} delay={0}/> 
            } +</h1>
      </ScrollTrigger>




        
      </div>
    </div>
  );
}

export default CouterUp;

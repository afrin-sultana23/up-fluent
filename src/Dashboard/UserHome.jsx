import React from 'react';
import ReactDOM from 'react-dom';
import Calendarr from 'react-github-contribution-calendar';
import Calendar from './Calendar';
const UserHome = () => {
    
    var values = {
  '2016-06-23': 1,
  '2016-06-24': 2,
  '2016-06-25': 3,
  '2016-06-26': 4,
  '2016-06-27': 5,
  '2016-06-28': 6,
  '2016-06-29': 4
}
var until = '2016-06-30';


    return (
        <div className='mx-auto w-full'>
            <p className='text-black text-2xl'>Observation: </p>

            <div className=''>
                <div className='pt-5 pl-4'>
                <p className='text-2xl text-black font-bold pb-2'>Progress Chart</p>
                <Calendarr values={values} until={until} />
              </div>
              
            </div>
               <Calendar></Calendar> 
        </div>
    );
};

export default UserHome ;
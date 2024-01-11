import React, { useEffect, useState } from 'react';
import Tours from './Tours/Tours'
import Loading from './Loading'
import {data} from './data';


const App = () => {
  
  const [loading,setLoading] = useState(false);
  const [tours, setTours] = useState(data);
  const [refresh, setRefresh] = useState(false);


  const removeTour = (id) => {
  let newTour = tours.filter((tour) => tour.id - id);
  setTours(newTour);
  }; 
  

  if (loading){
  <Loading/>

  }

const refreshBtn = () =>{
  window.location.reload()
}
  useEffect(() => {
    if(tours.length === 0){
    setRefresh(true)}
  })
  return (
    <>
    <div>
    <Tours   tours = {tours} removeTour={removeTour} refresh={refresh} refreshBtn={refreshBtn}/>
    </div>
    </>
  )
}

export default App
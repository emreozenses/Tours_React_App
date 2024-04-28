import { useEffect, useState } from "react";
import Tours from "./Tours";
import Loading from "./Loading";

const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
  const [isLoading,setIsLoading] = useState(true);
  const [tours,setTours] = useState([]);

  const removeTour =(id)=>{
    const newTours = tours.filter((tour)=>tour.id!==id);
    setTours(newTours);
  }
      const getTours = async () => {
        setIsLoading(true)
        try {
          const resp = await fetch(url)
          const data = await resp.json()
          setTours(data)
        } catch (error) {
          console.log(error)
        }
        setIsLoading(false)
      }
  useEffect(()=>{
    getTours();
  },[]);

  if(isLoading){
    return(
      <main>
        <Loading/>
      </main>
    )
  }
  if(tours.length === 0){
    return(
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button type="button" className="btn" style={{marginTop:'2rem'}} onClick={()=>getTours()}>Refresh</button>
        </div>
      </main>
    )
  }
  
  return (
    <main>
       <Tours tours={tours} removeTour={removeTour}/>
    </main>
  )
};
export default App;

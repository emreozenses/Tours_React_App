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
  useEffect(()=>{
    const getTours =async ()=>{
      setIsLoading(true)
      try {
        const resp = await fetch(url);
        const data = await resp.json();
        setTours(data);

      } catch (error) {
        console.log(error);
      }
      setIsLoading(false)
    };
    getTours();
  },[]);

  if(isLoading){
    return(
      <main>
        <Loading/>
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

import { useState } from "react"
import Cards from "./cards";


function App() {

  let [counter, setcounter] = useState(0);
  
  const addvalue=()=>{
    if(counter<5)
    setcounter(counter+1)
  else{
    alert("ONLY UPTO 5 AVAILABE TO ADD")
  }}
  return (
    <>
    
      <h1 className='bg-green-400'>AAYUS KARKI</h1>
      <button onClick={addvalue}>The count is {counter}</button>
      <Cards bikename="Mt 15" dettails="mountain"/>
      <Cards bikename="duke 290" dettails="katmandu"/>
    </>
  )
}

export default App

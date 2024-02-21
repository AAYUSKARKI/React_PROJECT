import { useState } from "react"


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
    </>
  )
}

export default App

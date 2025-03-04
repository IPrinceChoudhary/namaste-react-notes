import { useEffect, useState } from "react"

const Profile = ()=>{
  const [count, setCount] = useState(0)
  const [count2] = useState(2)

  useEffect(()=>{
    const id = setInterval(()=>{
      console.log("react op")
    },1000) // will call this setInterval after each second even we change our page and if we come again to this page where this effect is running it will run twice at the same time and so on

    // cleanup function 
    return ()=>{ // unmounting phase what we saw in class components
      clearInterval(id)
    }
  },[])
  return(
    <div>
      <h2>Profile functional comp</h2>
      <h3>{count}</h3>
      <h3>{count2}</h3>
      <button onClick={()=>{
        setCount(1)
        setCount(3)
      }}>count</button>
    </div>
  )
}

export default Profile
import { useState } from "react"

const Profile = ()=>{
  const [count, setCount] = useState(0)
  const [count2] = useState(2)
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
import React, {useState, useEffect} from 'react'

function Account() {
  const [tasks, setTasks] = useState({})

  useEffect(()=>{
    fetch("https://taskwithmeke.co.ke/api/get/task/user/1").then(
      (response)=> response.json()
      ).then(
        (data)=>{
          setTasks(data)
        }
      ).catch((error)=>{
        console.log(error)
      })
  }, [])
  return (
    <div className='myaccount'>
     <h1>
      {tasks.tasks.length}
    </h1>
    </div>
  )
}

export default Account;
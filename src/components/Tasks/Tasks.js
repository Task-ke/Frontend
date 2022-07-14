import React, {useState, useEffect} from 'react'
import axios from 'axios';

function Tasks() {
  
  const taskApi = axios.create(
    {
      baseURL: "http://taskwithmeke.co.ke/api/tasks"
    }
  );

  const [tasks, setTasks] = useState(
    {
      tasks: [
        {
          title: "Creation of image recognition System",
          description : "Stout Project: Social Media Evaluator   Project Purpose: The purpose of this workflow is to evaluate a given column of 9 anchor-candidate image pairs, we want to identify which of the candidate images are similar to the anchor image and More ...",
          amount: 500,
          owner: "Master",
          level: "Strict"
        },
        {
          title: "Display cool graphs using python",
          description: "Amsterdam real Project involving the installation of new python modules: Social Media Evaluator   Project Purpose: The purpose of this workflow is to evaluate a given column of 9 anchor-candidate image pairs, we want to identify which of the candidate images are similar to the anchor image and",
          amount: 8,
          owner: "Lumuli",
          level: "strict"
        }
      ]
    }
  )

  const headers = {

  }

  useEffect(()=>{
    const getTasks = async ()=>{
      const response = await taskApi.get(
        '/'
      ).then(
        setTasks(response.data)
      ).catch(error=>{
        console.log(error.toJSON())
      })
           
    }
    getTasks();

  }, [])


  return (
    <div className="task-section">
      <div className='filters tabs'>
        <div className='btn-group'>
          <button><a href='#tabs-1'>Suggested for you</a></button>
          <button><a href='#tabs-2'>Applied Projects</a></button>
          <button><a href='#tabs-3'>Pending projects</a></button>
          <button><a href='#tabs-4'>Claimed Projects</a></button>
          <button><a href='#tabs-5'>All Projects</a></button>
        </div>
        <div class="sort-func">
          <button>add Filter</button>
        </div>
      </div>
      <div className='task-body'>
        <table id="tabs-1">
          <thead>
            <tr>
              <th>Task Description</th>
              <th>Task Creator</th>
              <th>Rate</th>
              <th>Moderation</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              tasks.tasks.map(task =><tr>
                  <td className='task-content'>
                    <h6>{task.title}</h6>
                    <p>{task.description}</p>
                  </td>
                  <td>{task.owner}</td>
                  <td>$ {task.amount}</td>
                  <td>{task.level}</td>
                  <td>
                    <button>claim task</button>
                  </td>
                  <td>
                      <button>view task</button>
                    </td>
                </tr>
              )
            }  
          </tbody>
        </table>
      </div>
      <div className='pagination'>
        <button className='item-filter-btn'>
          Show 10 items per page
        </button>
        <small>showing 2 of 2</small>
        <div>
          <a href='#'>1</a>
        </div>
      </div>      
    </div>
  )
}

export default Tasks
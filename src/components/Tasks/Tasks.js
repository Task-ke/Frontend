import React, {useState, useEffect, Fragment} from 'react'

function Tasks() {
  const [tasks, setTasks] = useState({})
  const [isLoaded, setLoaded] = useState(false)
  const [Error, setError] = useState(null)

  useEffect(()=>{
    fetch("https://taskwithmeke.co.ke/api/tasks/").then(
      (response)=> response.json()
      ).then(
        (data)=>{
          setTasks(data)
          setLoaded(true)
        }
      ).catch((error)=>{
        setError(true)
      })
  }, [])

  function ClaimTask(taskid){

  }

  return (
    <><div className="task-section">
      <div className='filters tabs'>
        <div className='btn-group'>
          <button><a href='#tabs-1'>Suggested for you</a></button>
          <button><a href='#tabs-2'>Applied Projects</a></button>
          <button><a href='#tabs-3'>Pending projects</a></button>
          <button><a href='#tabs-4'>Claimed Projects</a></button>
          <button><a href='#tabs-5'>All Projects</a></button>
        </div>
        <div className="sort-func">
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

            {isLoaded === true ?
              tasks.tasks.map(
                (task) => {
                  return (
                    <tr>
                      <td className='task-content'>
                        <h6>{task.title}</h6>
                        <p>{task.description}</p>
                      </td>
                      <td>{task.creator_id}</td>
                      <td>$ {task.Amount}</td>
                      <td>Moderate</td>
                      <td>
                        <form method='POST'>
                          <button onSubmit={ClaimTask(task.id)}>claim task</button>
                        </form>
                      </td>
                      <td>
                        <button type="button" data-toggle="modal" data-target="#exampleModalCenter">
                          view task
                        </button>
                      </td>
                    </tr>
                  )
                }
              ) :
              <tr>
                <td><p>loading ...</p></td>
              </tr>}
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
      <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">View Task</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              Task Description
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">X</button>
            </div>
          </div>
        </div>
      </div></>
  )
}

export default Tasks
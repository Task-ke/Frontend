import React from 'react'
import axios from 'axios'

function Tasks() {
  return (
    <div className="task-section">
        <div className='task-body'>
          <div className="round-chart">
              <div className="circle-percent percent-more" data-percent="70">
                  <div className="circle-inner">
                      <div className="round-per"></div>
                  </div>
                  <div className="circle-inbox"><span className="percent-text">User</span></div>
              </div>
          </div>
          <div className='task-contents'>
            <h6>Create a latex document and prepare it for assignment</h6>
            <p>
              Ensure that the latex data is not corrupted and make sure it is done
            </p>
          </div>
          <div className='manage-task'>
            <button>Claim Task</button>
          </div>
          <div className='view-task'>
            <button>View Task</button>
          </div>
        </div>
        <div className='task-body'>
          <div className="round-chart">
              <div className="circle-percent percent-more" data-percent="70">
                  <div className="circle-inner">
                      <div className="round-per"></div>
                  </div>
                  <div className="circle-inbox"><span className="percent-text">User</span></div>
              </div>
          </div>
          <div>
            <h6>Solve this problem in the next session and ensure that it works</h6>
            <p>
              Find attached the documents required for the starting of the project
            </p>
          </div>
          <div className='manage-task'>
            <button>Claim Task</button>
          </div>
          <div>
            <button>View Task</button>
          </div>
        </div>
        <div className='task-body'>
          <div className="round-chart">
              <div className="circle-percent percent-more" data-percent="70">
                  <div className="circle-inner">
                      <div className="round-per"></div>
                  </div>
                  <div className="circle-inbox"><span className="percent-text">User</span></div>
              </div>
          </div>
          <div>
            <h6>Solve this problem in the next session and ensure that it works</h6>
            <p>
              Find attached the documents required for the starting of the project
            </p>
          </div>
          <div className='manage-task'>
            <button>Claim Task</button>
          </div>
          <div>
            <button>View Task</button>
          </div>
        </div>
        <div className='task-body'>
          <div className="round-chart">
              <div className="circle-percent percent-more" data-percent="70">
                  <div className="circle-inner">
                      <div className="round-per"></div>
                  </div>
                  <div className="circle-inbox"><span className="percent-text">User</span></div>
              </div>
          </div>
          <div>
            <h6>Solve this problem in the next session and ensure that it works</h6>
            <p>
              Find attached the documents required for the starting of the project
            </p>
          </div>
          <div className='manage-task'>
            <button>Claim Task</button>
          </div>
          <div>
            <button>View Task</button>
          </div>
        </div>
    </div>
  )
}

export default Tasks
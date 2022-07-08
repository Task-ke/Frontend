import React from 'react'
import axios from 'axios'

function Tasks() {
  return (
    <div className="task-section">
      <div className='filters'>
        <div className='btn-group'>
          <button>Suggested for you</button>
          <button>Applied Projects</button>
          <button>Pending projects</button>
          <button>Claimed Projects</button>
          <button>All Projects</button>
        </div>
        <div class="sort-func">
          <button>add Filter</button>
        </div>
      </div>
      
      <div className='task-body'>
        <table>
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
              <tr>
                <td className='task-content'>
                  <h6>Creation of image recognition System</h6>
                  Stout Project: Social Media Evaluator   Project Purpose: The purpose of this workflow is to evaluate a given column of 9 anchor-candidate image pairs, we want to identify which of the candidate images are similar to the anchor image and <a href='#'>More ...</a>
                </td>
                <td>Master</td>
                <td>$ 4.00 per hour</td>
                <td>Strict</td>
                <td><button>claim task</button></td>
                <td>
                  <button>view task</button>
                </td>
              </tr>
              <tr>
                <td className='task-content'>
                  <h6>Display cool graphs using python</h6>
                  Amsterdam real Project involving the installation of new python modules: Social Media Evaluator   Project Purpose: The purpose of this workflow is to evaluate a given column of 9 anchor-candidate image pairs, we want to identify which of the candidate images are similar to the anchor image and <a href='#'>More ...</a>
                </td>
                <td>Lumuli</td>
                <td>$ 8.00</td>
                <td>Strict</td>
                <td><button>claim task</button></td>
                <td><button>view task</button></td>
              </tr>   
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
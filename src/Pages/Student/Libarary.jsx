
import JsonData from '../data.json'

import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HomeHelper from '../../Components/HomeHelper'
import { useHistory } from 'react-router-dom'

function JsonDataDisplay() {
  const store = useSelector((store) => store)
  const history = useHistory()
  const DisplayData = JsonData.map(
    (info) => {
      return (
        <tr>
          <td>{info.title}</td>
          <td>{info.Std}</td>
          <td>{info.Medium}</td>
          <td> <img src={info.imageLink} alt="image" srcset="" /></td>
          
          <td><a href={info.link} target="_blank">Book</a></td>
        </tr>
      )
    }
  )

  return (

    <>
      {store.student.isAuthenticated ?
        <>
          <HomeHelper />
          <div>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Std</th>
                  <th>Medium</th>
                  <th>Image</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>


                {DisplayData}

              </tbody>
            </table>

          </div>
        </> : (history.push('/'))}
    </>


  )
}

export default JsonDataDisplay;


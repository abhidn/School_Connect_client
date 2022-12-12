import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {fetchAttendence} from '../redux/action/studentAction'
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';
import axios from 'axios'
import HomeHelper from '../Components/HomeHelper'
import { useHistory } from 'react-router-dom'

const Home = () => {
    const store = useSelector(store => store)
    const history = useHistory()
    const dispatch = useDispatch()


    useEffect(() => {
      dispatch(fetchAttendence())  
    },[])

    const data3 = [];
    if (store.student.attendence) {
        for (let i = 0; i < store.student.attendence.length; i++) {
            data3.push({ 'Subject': store.student.attendence[i].subjectName, "Percentage": store.student.attendence[i].attendence });
        }

    }
    console.log(store.student.attendence[0])
    console.log(data3)

    return (
        <div>
            {store.student.isAuthenticated ? <>
                <HomeHelper />
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-6 m-auto">
                            <table className="table border">
                                <thead>
                                    <tr>
                                        <th scope="col">S.No</th>
                                        <th scope="col">Subject Code</th>
                                        <th scope="col">Subject Name</th>
                                        <th scope="col">Maximum Hours</th>
                                        <th scope="col">Present Hours</th>
                                        <th scope="col">Absent Hours</th>
                                        <th scope="col">Conducted Hours</th>
                                        <th scope="col">Attendence</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        store.student.attendence.map((res, index) =>
                                            <tr key={index}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{res.subjectCode}</td>
                                                <td>{res.subjectName}</td>
                                                <td>{res.maxHours}</td>
                                                <td>{res.lectureAttended}</td>
                                                <td>{res.absentHours}</td>
                                                <td>{res.totalLecturesByFaculty}</td>
                                                <td>{res.attendence}%</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                            
                        </div>
                        <BarChart width={300} height={400} data={data3}>
                            <Bar dataKey="Percentage" fill="#8B008B" />
                            <CartesianGrid stroke="#ccc" />
                            <XAxis dataKey="Subject" />
                            <YAxis />
                            </BarChart>
                    </div>
                            
                </div>
            </> : (history.push('/'))}
           
            
        </div>

    )
}

export default Home

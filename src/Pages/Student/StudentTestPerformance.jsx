import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getMarks } from '../../redux/action/studentAction'
import HomeHelper from '../../Components/HomeHelper'
import { useHistory } from 'react-router-dom'

import '../../stylesheets/test.css'
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';
import { useReactToPrint } from "react-to-print";


const StudentTestPerformance = () => {
    const store = useSelector(store => store)
    const history = useHistory()
    const dispatch = useDispatch()
    let sum1 = 0;
    let Total_sum1 = 0;
    let sum2 = 0;
    let Total_sum2 = 0;
    let sum = 0;
    let Total_sum = 0;
    useEffect(() => {
        dispatch(getMarks())

    }, [])

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    if (store.student.allMarks.CycleTest1) {
        for (let i = 0; i < store.student.allMarks.CycleTest1.length; i++) {
            sum1 += store.student.allMarks.CycleTest1[i].marks;
            Total_sum1 += store.student.allMarks.CycleTest1[i].totalMarks;
        }
        // console.log(sum1);
        // console.log(Total_sum1);
    }
    if (store.student.allMarks.CycleTest2) {
        for (let i = 0; i < store.student.allMarks.CycleTest2.length; i++) {
            sum2 += store.student.allMarks.CycleTest2[i].marks;
            Total_sum2 += store.student.allMarks.CycleTest2[i].totalMarks;
        }
        // console.log(sum2);
        // console.log(Total_sum2);
    }
    if (store.student.allMarks.Semester) {
        for (let i = 0; i < store.student.allMarks.Semester.length; i++) {
            sum += store.student.allMarks.Semester[i].marks;
            Total_sum += store.student.allMarks.Semester[i].totalMarks;
        }
        // console.log(sum);
        // console.log(Total_sum);
    }
    


    // Graphical Representation
    const data1 = [];
    // console.log(store.student.allMarks.CycleTest1)
    if (store.student.allMarks.CycleTest1) {
        for (let i = 0; i < store.student.allMarks.CycleTest1.length; i++) {
            data1.push({ 'Subject': store.student.allMarks.CycleTest1[i].subject.subjectName, "Marks": store.student.allMarks.CycleTest1[i].marks });
        }

    }
    const data2 = [];
    if (store.student.allMarks.CycleTest2) {
        for (let i = 0; i < store.student.allMarks.CycleTest2.length; i++) {
            data2.push({ 'Subject': store.student.allMarks.CycleTest2[i].subject.subjectName, "Marks": store.student.allMarks.CycleTest2[i].marks });
        }

    }
    const data3 = [];
    if (store.student.allMarks.Semester) {
        for (let i = 0; i < store.student.allMarks.Semester.length; i++) {
            data3.push({ 'Subject': store.student.allMarks.Semester[i].subject.subjectName, "Marks": store.student.allMarks.Semester[i].marks });
        }

    }

    return (

        <>
            {store.student.isAuthenticated ? <>
                <HomeHelper />
                <div class="print__section">
                    <div class="container">
                        <div class="row" >
                            <div class="col-md-12" >                            
                                <div ref={componentRef}>
                                    <div class="float__infoss">
                                        <div className="container" >

                                            {store.student.allMarks.CycleTest1 &&
                                                <div className="row mt-3">
                                                    <div className="col-md-8 m-auto">
                                                        {store.student.allMarks.CycleTest1.length !== 0 ? <>
                                                            <div class="eleven">
                                                                <h2>Unit Test 1</h2>
                                                            </div>
                                                            <table class="content-table">
                                                                <thead>
                                                                    <tr>
                                                                        <th >S.No</th>
                                                                        <th >Subject Code</th>
                                                                        <th >Subject Name</th>
                                                                        <th >Obtained Marks</th>
                                                                        <th >Total Marks</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {
                                                                        store.student.allMarks.CycleTest1.map((res, index) =>

                                                                            <tr key={index}>
                                                                                <th scope="row">{index + 1}</th>
                                                                                <td>{res.subject.subjectCode}</td>
                                                                                <td>{res.subject.subjectName}</td>
                                                                                <td>{res.marks}</td>
                                                                                <td>{res.totalMarks}</td>
                                                                               

                                                                            </tr>
                                                                        )
                                                                    }
                                                                </tbody>
                                                            </table>
                                                        </> : null}
                                                        <p style={{ color: "black" }}>Total Percentage: {((sum1) * 100 / Total_sum1)}%</p>
                                                    </div>
                                                    <BarChart width={200} height={300} data={data1}>
                                                        <Bar dataKey="Marks" fill="#344D67" />
                                                        <CartesianGrid stroke="#ccc" />
                                                        <XAxis dataKey="Subject" />
                                                        <YAxis />
                                                    </BarChart>
                                                </div>



                                            }

                                            {store.student.allMarks.CycleTest2 &&
                                                <div className=" row mt-3">
                                                    <div className="col-md-8 m-auto">
                                                        {store.student.allMarks.CycleTest2.length !== 0 ? <>
                                                            <div class="eleven">
                                                                <h2>Unit Test 2</h2>
                                                            </div>
                                                            <table class="content-table">
                                                                <thead>
                                                                    <tr>
                                                                        <th >S.No</th>
                                                                        <th >Subject Code</th>
                                                                        <th >Subject Name</th>
                                                                        <th >Obtained Marks</th>
                                                                        <th >Total Marks</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {
                                                                        store.student.allMarks.CycleTest2.map((res, index) =>

                                                                            <tr key={index}>
                                                                                <th scope="row">{index + 1}</th>
                                                                                <td>{res.subject.subjectCode}</td>
                                                                                <td>{res.subject.subjectName}</td>
                                                                                <td>{res.marks}</td>
                                                                                <td>{res.totalMarks}</td>
                                                                                {/* <td>{(res.marks / res.totalMarks) * 100}%</td> */}

                                                                            </tr>
                                                                        )
                                                                    }
                                                                </tbody>
                                                            </table></> : null}
                                                        <p style={{ color: "black" }}>Total Percentage: {((sum2) * 100 / Total_sum2)}%</p>
                                                    </div>
                                                    <BarChart width={200} height={300} data={data2}>
                                                        <Bar dataKey="Marks" fill="green" />
                                                        <CartesianGrid stroke="#ccc" />
                                                        <XAxis dataKey="Subject" />
                                                        <YAxis />
                                                    </BarChart>
                                                </div>
                                            }

                                            {store.student.allMarks.Semester &&
                                                <div className="row mt-3">
                                                    <div className="col-md-8 m-auto">
                                                        {store.student.allMarks.Semester.length !== 0 ? <>
                                                            <h2>End Semester Exam</h2>
                                                            <table class="content-table">
                                                                <thead>
                                                                    <tr>
                                                                        <th >S.No</th>
                                                                        <th >Subject Code</th>
                                                                        <th >Subject Name</th>
                                                                        <th >Obtained Marks</th>
                                                                        <th >Total Marks</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {
                                                                        store.student.allMarks.Semester.map((res, index) =>

                                                                            <tr key={index}>
                                                                                <th scope="row">{index + 1}</th>
                                                                                <td>{res.subject.subjectCode}</td>
                                                                                <td>{res.subject.subjectName}</td>
                                                                                <td>{res.marks}</td>
                                                                                <td>{res.totalMarks}</td>
                                                                                {/* <td>{(res.marks / res.totalMarks) * 100}%</td> */}

                                                                            </tr>
                                                                        )
                                                                    }
                                                                </tbody>
                                                            </table></> : null}
                                                        <p style={{ color: "black" }}>Total Percentage: {((sum) * 100 / Total_sum)}%</p>
                                                    </div>
                                                    <BarChart width={200} height={300} data={data3}>
                                                        <Bar dataKey="Marks" fill="#344D67" />
                                                        <CartesianGrid stroke="#ccc" />
                                                        <XAxis dataKey="Subject" />
                                                        <YAxis />
                                                    </BarChart>
                                                </div>

                                            }
                                        </div>
                                    </div>
                                </div>
                                {/* <button onClick={handlePrint} className="print__button"> Print </button> */}
                                <hr />
                                
                                <button onClick={handlePrint} type="submit" className="btn btn-info btn-block" style={{width:"100px",marginLeft:"auto",backgroundColor:"black",borderColor:"black"}}>Print</button>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>



            </> : (history.push('/'))}

        </>




    )








}

export default StudentTestPerformance

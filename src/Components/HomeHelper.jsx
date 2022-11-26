import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { studentLogout, newerChats, previousChats } from '../redux/action/studentAction'
import '../stylesheets/navbar.css'
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

import Libarary from '../Pages/Student/Libarary'
const Home = () => {
    const history = useHistory()
    const store = useSelector((store) => store)
    const [name, setName] = useState("")
    useEffect(() => {
        if (store.student.student.student.name) {
            setName(store.student.student.student.name)
        }
    }, [store.student.student.student.name])
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(newerChats(store.student.student.student.name))
        dispatch(previousChats(store.student.student.student.name))
    }, [store.student.newerChats.length])
    const logoutHandler = () => {
        dispatch(studentLogout())
        history.push('/')
    }
    return (
        <>

            <nav>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl3Bp5kE232YWdc__a3O9XsvNdEkJ3uUEp1zXMZ6-jMtyG5-3tVU-8-_m_jfbhxdXl5uQ&usqp=CAU" alt="logo" srcset="" />
                <div className='navigation'>
                    <ul>

                        <li>
                            <a href="#"><h1>Sou. Tarabai Madhavrao Mohite Vidyalaya Rethare Bk</h1></a>
                            <p className='para'><p></p> 56C7+4MJ, Dharme Patil Wada, Rethare bk., Maharashtra 415108</p>
                           
                        </li>
                        <li>
                            <a href="#"><FaFacebook /></a>

                        </li>
                        <li>
                            <a href="#"><FaInstagram /></a>

                        </li>
                        <li>
                            <a href="#"><FaTwitter /></a>

                        </li>
                    </ul>
                </div>
            </nav>



            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <nav className="navbar navbar-expand-lg navbar-light  bg-light">
                            <h4 className="navbar-brand mt-1" href="">STMMV</h4>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <button type="button" className="btn"><Link to="/home"><li>{name.toUpperCase()}</li></Link></button>
                                    </li>
                                    <li className="nav-item">
                                        <button type="button" className="btn"><Link to="/student/updateProfile"><li>UPDATE PROFILE</li></Link></button>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            ACADEMIC </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <Link className="dropdown-item" to="/student/testPerformance">Test Performance</Link>
                                            <Link className="dropdown-item" to="/student/attendence">Attendance</Link>
                                            <Link className="dropdown-item" to="/student/getAllSubjects">Student Subject List</Link>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <button type="button" className="btn"><Link to="/studentDetails"><li>STUDENTS</li></Link></button>
                                    </li>
                                    <li className="nav-item">
                                        <button type="button" className="btn"><Link to="/studentDetails"><li>NEW CONVERSATION ({store.student.newerChats.length})</li></Link></button>
                                    </li>
                                    <li className="nav-item">
                                        <button type="button" className="btn"><Link to="/student/updatePassword"><li>UPDATE PASSWORD</li></Link></button>
                                    </li>
                                    <li className="nav-item">
                                        <button type="button" className="btn"><Link to='/books'><li>LIBRARY</li></Link></button>
                                    </li>

                                </ul>

                            </div>
                            <div>
                                <button style={{ listStyle: "none" }} onClick={logoutHandler} type="button" className="btn"><li>LOGOUT</li></button>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home

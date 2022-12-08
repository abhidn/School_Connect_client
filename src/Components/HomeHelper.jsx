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
   

    const finalname = name.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    return (
        <>

            <nav>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl3Bp5kE232YWdc__a3O9XsvNdEkJ3uUEp1zXMZ6-jMtyG5-3tVU-8-_m_jfbhxdXl5uQ&usqp=CAU" alt="logo" srcset="" />
                <div className='navigation'>
                    <ul>

                        <li>
                            <a href="#"><h1>Sou. Tarabai Madhavrao Mohite Vidyalaya Rethare Bk</h1></a>
                            <p className='para'><p></p> Near Dharme Patil Wada, Rethare bk , Tal-Karad , Dist-Satara , Maharashtra 415108</p>

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



            <div className="container-fluid ">
                <div className="row">
                    <div className="col">
                        <nav className="navbar navbar-expand-lg navbar-light  bg-dark">
                            <h4 className="navbar-brand mt-1" href="" style={{ color: "white", fontSize: "20px" }}>STMMV</h4>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item active" >
                                        <button type="button" className="btn" ><Link to="/home" style={{ color: "white", textDecoration: 'none', fontSize: "18px" }}><li>{finalname}</li></Link></button>
                                    </li>
                                    <li className="nav-item">
                                        <button type="button" className="btn"><Link to="/student/updateProfile" style={{ color: "white", textDecoration: 'none', fontSize: "18px" }}><li>Update Profile</li></Link></button>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ color: "white", fontSize: "18px" }}>
                                            Academic </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <Link className="dropdown-item" to="/student/testPerformance">Test Performance</Link>
                                            <Link className="dropdown-item" to="/student/attendence">Attendance</Link>
                                            <Link className="dropdown-item" to="/student/getAllSubjects">Student Subject List</Link>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <button type="button" className="btn"><Link to="/studentDetails" style={{ color: "white", textDecoration: 'none', fontSize: "18px" }}><li>Students</li></Link></button>
                                    </li>
                                    <li className="nav-item">
                                        <button type="button" className="btn"><Link to="/studentDetails" style={{ color: "white", textDecoration: 'none', fontSize: "18px" }}><li>New Conversation ({store.student.newerChats.length})</li></Link></button>
                                    </li>
                                    <li className="nav-item">
                                        <button type="button" className="btn"><Link to="/student/updatePassword" style={{ color: "white", textDecoration: 'none', fontSize: "18px" }}><li>Update Password</li></Link></button>
                                    </li>
                                    <li className="nav-item">
                                        <button type="button" className="btn"><Link to='/books' style={{ color: "white", textDecoration: 'none', fontSize: "18px" }}><li>Library</li></Link></button>
                                    </li>

                                </ul>

                            </div>
                            <div>
                                <button style={{ listStyle: "none", color: "white", fontSize: "18px" }} onClick={logoutHandler} type="button" className="btn" ><li>LOGOUT</li></button>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home

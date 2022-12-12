import React, {useState,useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import {facultyLogout} from '../redux/action/facultyAction'
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';



const Home = () => {
    const store = useSelector((store)=>store)
    const history = useHistory()
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    useEffect(() => {

        if (store.faculty.faculty.faculty.name) {
            setName(store.faculty.faculty.faculty.name)
        }
    }, [store.faculty.faculty.faculty.name])
    const logoutHandler = () => {
        dispatch(facultyLogout())
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

        <div className="container-fluid">
            {/* <Header /> */}
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <h4 className="navbar-brand mt-1" href="">STMMV</h4>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <button type="button" className="btn" style={{ color: "white"}}><Link to="/home"><li>{name.toUpperCase()}</li></Link></button>
                                </li>
                                {/* <li className="nav-item">
                                    <button type="button" className="btn"><Link to="/faculty/updateProfile"><li>UPDATE PROFILE</li></Link></button>
                                </li> */}
                                <li className="nav-item">
                                    <button type="button" className="btn"><Link to="/attendenceFaculty"><li>MARK ATTENDANCE</li></Link></button>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="btn"><Link to="/faculty/uploadMarks"><li>UPLOAD MARKS</li></Link></button>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="btn"><Link to="/faculty/updatePassword"><li>UPDATE PASSWORD</li></Link></button>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <button style={{listStyle:"None"}} onClick={logoutHandler} type="button" className="btn1"><li>LOGOUT</li></button>
                        </div>
                    </nav>
                </div>
            </div>
        </div>

    </>
    )
}

export default Home

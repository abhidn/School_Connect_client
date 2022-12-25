

import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import { facultyLogin } from '../redux/action/facultyAction'
import { studentLogin } from '../redux/action/studentAction'
import classnames from 'classnames'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../stylesheets/aunthetication.css'
import Loader from '../Components/Loader';
import { FaInstagram, FaTwitter, FaFacebook ,FaSchool} from 'react-icons/fa';

const StudentLogin = () => {

    const store = useSelector((state) => state)
    const dispatch = useDispatch()

    const [studentRegNum, setStudentRegNum] = useState('')
    const [studentPassword, setStudentPassword] = useState('')
    const [errors, setErrors] = useState({})
    const [errorsHelper, setErrorsHelper] = useState({})

    const [isStudentLoading, setIsStudentLoading] = useState(false)
    const [StudentLoading, setStudentLoading] = useState(false)

    const history = useHistory()



    useEffect(() => {
        if (store.error) {

            setErrors(store.error)
        }
    }, [store.error])
    useEffect(() => {
        if (store.student.isAuthenticated) {
            history.push('/home')

        }
    }, [store.student.isAuthenticated])

    useEffect(() => {

        if (store.errorHelper) {

            setErrorsHelper(store.errorHelper)
        }
    }, [store.errorHelper])







    const studentFormHandler = (e) => {

        e.preventDefault()
        let registrationNumber;
        let password;
        setIsStudentLoading(true)

        dispatch(studentLogin({ registrationNumber: studentRegNum, password: studentPassword }))
        console.log(store.student.isAuthenticated)
        // if (!StudentLoading) {
        //     toast.error('Login failed!', {
        //         position: toast.POSITION.TOP_RIGHT
        //     });

        // }




    }

    useEffect(() => {

        if (store.errorHelper ||
            store.student.isAuthenticated) {
            setIsStudentLoading(false)

        }
        else {
            setIsStudentLoading(true)
        }

    }, [store.errorHelper, store.student.isAuthenticated])

    return (
        <>

            <div className='login-parent'>
                {isStudentLoading && (<Loader />)}

                <div class="row justify-content-center">
                    <div class="col-md-4 z1" >
                        <div className="col-md-8 m-auto border" style={{ backgroundColor: "white", borderRadius: "1.2rem", padding: "1rem 1rem 0rem 1rem" }}>
                            <h3 className="text-center">STUDENT</h3>
                            <form noValidate onSubmit={studentFormHandler}>
                                <div className="form-group">
                                    <label htmlFor="studentId">Registration Number</label>
                                    <input onChange={(e) => setStudentRegNum(e.target.value)} type="text" value={studentRegNum} className={classnames('form-control', {
                                        'is-invalid': errorsHelper.registrationNumber
                                    })}
                                        id="studentId" />
                                    {errorsHelper.registrationNumber && (
                                        <div className="invalid-feedback">{errorsHelper.registrationNumber}</div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="passwordId">Password</label>
                                    <input onChange={(e) => setStudentPassword(e.target.value)} value={studentPassword} className={classnames("form-control", {
                                        'is-invalid': errorsHelper.password
                                    })}
                                        type="password" id="passwordId" />
                                    {errorsHelper.password && (
                                        <div className="invalid-feedback">{errorsHelper.password}</div>
                                    )}
                                </div>

                                <button type="submit" className="btn btn-info btn-block ">Login</button>
                                <ToastContainer />

                            </form>
                            <br></br>
                            <p className="text-center"><Link className="text-center" to="/forgotPassword/student">Forgot Password</Link>

                            </p>
                            <p className="text-center"><Link className="text-center" to="/facultylogin">Faculty Login  </Link>
                         
                            </p>

                        </div>
                    </div>
                    <div class="col-md-5 z1" >
                        <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_u0w6fbdq.json" background="transparent" speed="1" loop autoplay></lottie-player>
                    </div>


                </div>
                <div className='login-bottom'></div>
            </div>


        </>
    )
}

export default StudentLogin
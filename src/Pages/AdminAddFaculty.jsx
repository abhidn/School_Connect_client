import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import classnames from 'classnames'
import { adminAddFaculty } from '../redux/action/adminAction'
import AdminHomeHelper from '../Components/AdminHomeHelper'


const AdminAddFaculty = () => {
    const store = useSelector((state) => state)
    const dispatch = useDispatch()
    const history = useHistory()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [classroom, setDepartment] = useState('')
    const [designation, setDesignation] = useState('')
    const [facultyMobileNUmber, setFacultyMobileNumber] = useState('')
    const [dob, setDob] = useState('')
    const [gender, setGender] = useState('')
    const [aadharCard, setAadharCard] = useState('')
    const [error, setError] = useState({})
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        if (store.error) {
            setError(store.error)
        }
    }, [store.error])
    const formHandler = (e) => {
        e.preventDefault()
        setIsLoading(true)
        dispatch(adminAddFaculty({
            name,
            email,
            designation,
            facultyMobileNUmber,
            classroom,
            aadharCard,
            gender,
            dob: dob.split("-").reverse().join("-")
        }))
    }

    useEffect(() => {
        if (store.admin.adminAddFacultyFlag) {
            setError({})
        }
    }, [store.admin.adminAddFacultyFlag])

    useEffect(() => {
        if (store.error || store.admin.adminAddFacultyFlag) {
            setIsLoading(false)
        }
        else {
            setIsLoading(true)
        }
    }, [store.error, store.admin.adminAddFacultyFlag])
    return (

        <div>
            {store.admin.isAuthenticated ? (<><AdminHomeHelper />
                <div className="container mt-5">
                    <div className="row ">
                        <div className="col">
                            <form noValidate onSubmit={formHandler}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="nameId">Faculty Name</label>
                                            <input onChange={(e) => setName(e.target.value)} type="text" className={classnames("form-control",
                                                {
                                                    'is-invalid': error.name
                                                })} id="nameId" />
                                            {error.name && (<div className="invalid-feedback">{error.name}</div>)}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="emailId">Email</label>
                                            <input onChange={(e) => setEmail(e.target.value)} type="email" className={classnames("form-control",
                                                {
                                                    'is-invalid': error.email
                                                })} id="emailId" />
                                            {error.email && (<div className="invalid-feedback">{error.email}</div>)}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="designationId">Designation</label>
                                            <select onChange={(e) => setDesignation(e.target.value)} className={classnames("form-control",
                                                {
                                                    'is-invalid': error.designation
                                                })} id="designationId">
                                                <option>Select</option>
                                                <option value="Assistant Professor">Assistant Professor</option>
                                                <option value="Senior Professer">Senior Professer</option>
                                            </select>
                                            {error.designation && (<div className="invalid-feedback">{error.designation}</div>)}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="departmentId">classroom</label>
                                            <select onChange={(e) => setDepartment(e.target.value)} className={classnames("form-control",
                                                {
                                                    'is-invalid': error.classroom
                                                })} id="departmentId">
                                                <option>Select</option>


                                                <option value="five">Five</option>
                                                <option value="six">Six</option>
                                                <option value="seven">Seven</option>
                                                <option value="eight">Eight</option>
                                                <option value="Nine">Nine</option>
                                                <option value="ten">Ten</option>

                                            </select>
                                            {error.classroom && (<div className="invalid-feedback">{error.classroom}</div>)}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="dobId">DOB</label>
                                            <input onChange={(e) => setDob(e.target.value)} type="date" className={classnames("form-control",
                                                {
                                                    'is-invalid': error.dob
                                                })} id="dobId" />
                                            {error.dob && (<div className="invalid-feedback">{error.dob}</div>)}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="genderId">Gender</label>
                                            <select onChange={(e) => setGender(e.target.value)} className={classnames("form-control",
                                                {
                                                    'is-invalid': error.gender
                                                })} id="genderId">
                                                <option>Select</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Other">Other</option>
                                            </select>
                                            {error.gender && (<div className="invalid-feedback">{error.gender}</div>)}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="numberId">Contact Number</label>
                                            {/* <input onChange={(e) => setFacultyMobileNumber(e.target.value)} type="number" className="form-control" id="numberId" /> */}

                                            <input onChange={(e) => setFacultyMobileNumber(e.target.value)} type="number" className={classnames("form-control",
                                                {
                                                    'is-invalid': error.facultyMobileNumber
                                                })} id="numberId" />
                                            {error.facultyMobileNumber && (<div className="invalid-feedback">{error.facultyMobileNumber}</div>)}



                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="aadharId">Aadhar Card Number</label>
                                            {/* <input onChange={(e) => setAadharCard(e.target.value)} type="number" className="form-control" id="aadharId" /> */}
                                            <input onChange={(e) => setAadharCard(e.target.value)} type="number" className={classnames("form-control",
                                                {
                                                    'is-invalid': error.aadharCard
                                                })} id="aadharId" />
                                            {error.aadharCard && (<div className="invalid-feedback">{error.aadharCard}</div>)}
                                        </div>
                                    </div>
                                </div>
                                <div class="row justify-content-center">
                                    <div class="col-md-1">
                                        {
                                            isLoading && <div class="spinner-border text-primary" role="status">
                                                <span class="sr-only">Loading...</span>
                                            </div>
                                        }
                                    </div>
                                </div>
                                {!isLoading && <button type="submit" className="btn btn-info">Add Faculty</button>}
                            </form>
                        </div>
                    </div>
                </div></>) : (history.push('/'))}

        </div>



    )
}

export default AdminAddFaculty

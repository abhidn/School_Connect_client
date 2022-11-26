import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import HomeHelper from '../Components/HomeHelper'
import '../stylesheets/StudentHome.css'


const Home = () => {
    const store = useSelector((store) => store)
    const history = useHistory()

    return (
        <div>
            {store.student.isAuthenticated ? <>
                <HomeHelper />
                {/* <div className="container">
                    <div className="row">
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-8 mt-5">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="card" style={{ width: "18rem" }}>
                                        <img className="card-img-top" src={store.student.student.student.avatar} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">{store.student.student.student.name}</h5>
                                            <h5 className="card-title">{store.student.student.student.registrationNumber}</h5>
                                            <Link to='/student/updateProfile'>UPDATE PROFILE</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-7 bg-dark  text-white">
                                    <table className="table ">
                                        <tbody className="text-white">
                                            <tr>
                                                <td>Name</td>
                                                <td>{store.student.student.student.name}</td>
                                            </tr>
                                            <tr>
                                                <td>Email</td>
                                                <td>{store.student.student.student.email}</td>
                                            </tr>
                                            <tr>
                                                <td>Registration Number</td>
                                                <td>{store.student.student.student.registrationNumber}</td>
                                            </tr>
                                            <tr>
                                                <td>Date Of Birth</td>
                                                <td>{store.student.student.student.dob}</td>
                                            </tr>
                                            <tr>
                                                <td>Year</td>
                                                <td>{store.student.student.student.year}</td>
                                            </tr>
                                            <tr>
                                                <td>classroom</td>
                                                <td>{store.student.student.student.classroom}</td>
                                            </tr>
                                            <tr>
                                                <td>division</td>
                                                <td>{store.student.student.student.division}</td>
                                            </tr>
                                            <tr>
                                                <td>Batch</td>
                                                <td>{store.student.student.student.batch}</td>
                                            </tr>
                                            <tr>
                                                <td>Gender</td>
                                                <td>{store.student.student.student.gender ? store.student.student.student.gender : 
                                                
                                                   "NA"
                                                }</td>
                                            </tr>
                                            <tr>
                                                <td>Contact Number</td>
                                                <td>{store.student.student.student.studentMobileNumber ?
                                                    store.student.student.student.studentMobileNumber : "NA"}</td>
                                            </tr>
                                            <tr>
                                                <td>Aadhar Card</td>
                                                <td>{store.student.student.student.aadharCard ? store.student.student.student.aadharCard : "NA"} </td>
                                            </tr>
                                            <tr>
                                                <td>Father Name</td>
                                                <td>{store.student.student.student.fatherName ? store.student.student.student.fatherName : "NA" }</td>
                                            </tr>
                                            <tr>
                                                <td>Father Contact Number</td>
                                                <td>{store.student.student.student.fatherMobileNumber ? store.student.student.student.fatherMobileNumber : "NA"}</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">

                        </div>

                    </div>
                </div> */}

                {/* <!-- Student Profile --> */}
                <div class="student-profile py-4">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="card shadow-sm">
                                    <div class="card-header bg-transparent text-center">
                                        <img class="profile_img" src="https://placeimg.com/640/480/arch/any" alt="" />
                                        <h3>{store.student.student.student.name}</h3>
                                    </div>
                                    <div class="card-body">
                                        <p class="mb-0"><strong class="pr-1">Student ID:</strong>{store.student.student.student.registrationNumber}</p>
                                        <p class="mb-0"><strong class="pr-1">Class:</strong>{store.student.student.student.classroom}</p>
                                        <p class="mb-0"><strong class="pr-1">Section:</strong>{store.student.student.student.division}</p>
                                        <p class="mb-0"><i class="fa fa-pencil-square-o" aria-hidden="true"></i><Link to='/student/updateProfile'> Update Profile</Link></p>
                                        
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="card shadow-sm">
                                    <div class="card-header bg-transparent border-0">
                                        <h3 class="mb-0"><i class="fa fa-clone" aria-hidden="true"></i> General Information</h3>
                                    </div>
                                    <div class="card-body pt-0">
                                        <table class="table table-bordered">
                                            <tr>
                                                <th width="30%">Date Of Birth</th>
                                                <td width="2%">:</td>
                                                <td>{store.student.student.student.dob}</td>
                                            </tr>
                                            <tr>
                                                <th width="30%">Academic Year	</th>
                                                <td width="2%">:</td>
                                                <td>{store.student.student.student.year}</td>
                                            </tr>
                                            <tr>
                                                <th width="30%">Gender</th>
                                                <td width="2%">:</td>
                                                <td>{store.student.student.student.gender ? store.student.student.student.gender :"NA"}</td>
                                            </tr>
                                            <tr>
                                                <th width="30%">Email</th>
                                                <td width="2%">:</td>
                                                <td>{store.student.student.student.email}</td>
                                            </tr>
                                            <tr>
                                                <th width="30%">Batch</th>
                                                <td width="2%">:</td>
                                                <td>{store.student.student.student.batch}</td>
                                            </tr>
                                            <tr>
                                                <th width="30%">Contact Number</th>
                                                <td width="2%">:</td>
                                                <td>{store.student.student.student.studentMobileNumber ?
                                                    store.student.student.student.studentMobileNumber : "NA"}</td>
                                            </tr>
                                            <tr>
                                                <th width="30%">Adhar number</th>
                                                <td width="2%">:</td>
                                                <td>{store.student.student.student.aadharCard ? store.student.student.student.aadharCard : "NA"}</td>
                                            </tr>
                                            <tr>
                                                <th width="30%">Father Name</th>
                                                <td width="2%">:</td>
                                                <td>{store.student.student.student.fatherName ? store.student.student.student.fatherName : "NA" }</td>
                                            </tr>
                                            <tr>
                                                <th width="30%">Father Number</th>
                                                <td width="2%">:</td>
                                                <td>{store.student.student.student.fatherMobileNumber ? store.student.student.student.fatherMobileNumber : "NA"}</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </> : (history.push('/'))}
        </div>

    )
}

export default Home

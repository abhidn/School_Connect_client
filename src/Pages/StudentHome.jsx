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
                                            <b className="card-title">{store.student.student.student.name}</b>
                                            <b className="card-title">{store.student.student.student.registrationNumber}</b>
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
                            <div class="col-lg-4" >
                                <div class="card shadow-sm" style={{paddingBottom:"48px"}}>
                                    <div class="card-header bg-transparent text-center">
                                        <img class="profile_img" src="https://placeimg.com/640/480/arch/any" alt="" />
                                        <br></br>
                                        <b style={{fontFamily:"roboto",fontSize:"20px"}}>{store.student.student.student.name}</b>
                                    </div>
                                    <div class="card-body">
                                        <p class="mb-0"><b class="pr-1" style={{fontWeight:"bold",fontFamily:"roboto",fontSize:"18px"}}>Student ID:</b>{store.student.student.student.registrationNumber}</p>
                                        <p class="mb-0" style={{textTransform:"capitalize"}}><b class="pr-1" style={{fontWeight:"bold",fontFamily:"roboto",fontSize:"18px"}}>Class:</b>{store.student.student.student.classroom}</p>
                                        <p class="mb-0"><b class="pr-1" style={{fontWeight:"bold",fontFamily:"roboto",fontSize:"18px"}}>Section:</b>{store.student.student.student.division}</p>
                                        <p class="mb-0"><i class="fa fa-pencil-square-o" aria-hidden="true"></i><Link to='/student/updateProfile'> Update Profile</Link></p>
                                        
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="card shadow-sm">
                                    <div class="card-header bg-transparent border-0">
                                        <b class="mb-0" style={{fontFamily:"roboto",fontSize:"20px"}}><i class="fa fa-clone" aria-hidden="true"></i> General Information</b>
                                    </div>
                                    <div class="card-body pt-0">
                                        <table class="table table-bordered">
                                            <tr>
                                                <th width="30%" style={{fontFamily:"roboto",fontSize:"16px"}}>Date Of Birth</th>
                                                <td width="2%">:</td>
                                                <td>{store.student.student.student.dob}</td>
                                            </tr>
                                            <tr>
                                                <th width="30%" style={{fontFamily:"roboto",fontSize:"16px"}}>Academic Year	</th>
                                                <td width="2%">:</td>
                                                <td>{store.student.student.student.year}</td>
                                            </tr>
                                            <tr>
                                                <th width="30%" style={{fontFamily:"roboto",fontSize:"16px"}}>Gender</th>
                                                <td width="2%">:</td>
                                                <td>{store.student.student.student.gender ? store.student.student.student.gender :"NA"}</td>
                                            </tr>
                                            <tr>
                                                <th width="30%" style={{fontFamily:"roboto",fontSize:"16px"}}>Email</th>
                                                <td width="2%">:</td>
                                                <td>{store.student.student.student.email}</td>
                                            </tr>
                                            <tr>
                                                <th width="30%" style={{fontFamily:"roboto",fontSize:"16px"}}>Batch</th>
                                                <td width="2%">:</td>
                                                <td>{store.student.student.student.batch}</td>
                                            </tr>
                                            <tr>
                                                <th width="30%" style={{fontFamily:"roboto",fontSize:"16px"}}>Contact Number</th>
                                                <td width="2%">:</td>
                                                <td>{store.student.student.student.studentMobileNumber ?
                                                    store.student.student.student.studentMobileNumber : "NA"}</td>
                                            </tr>
                                            <tr>
                                                <th width="30%" style={{fontFamily:"roboto",fontSize:"16px"}}>Adhar number</th>
                                                <td width="2%">:</td>
                                                <td>{store.student.student.student.aadharCard ? store.student.student.student.aadharCard : "NA"}</td>
                                            </tr>
                                            <tr>
                                                <th width="30%" style={{fontFamily:"roboto",fontSize:"16px"}}>Father Name</th>
                                                <td width="2%">:</td>
                                                <td>{store.student.student.student.fatherName ? store.student.student.student.fatherName : "NA" }</td>
                                            </tr>
                                            <tr>
                                                <th width="30%" style={{fontFamily:"roboto",fontSize:"16px"}}>Father Number</th>
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

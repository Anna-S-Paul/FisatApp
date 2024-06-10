import React, { useEffect, useState } from 'react'
import NavFisat from './NavFisat'
import axios from 'axios'

const ViewFisat = () => {
    const [data, setData] = useState([])
    const fetchData = () => {
        axios.get("https://courseapplogix.onrender.com/getdata").then(
            (response) => {
                setData(response.data)
            }
        ).catch(
            (error)=>{
                console.log(error.message)
                alert(error.message)
            }
        ).finally()

    }
    useEffect(()=>
        {fetchData()
        },[])
    return (
        <div>
            <NavFisat />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Firstname</th>
                                    <th scope="col">Lastname</th>
                                    <th scope="col">College</th>
                                    <th scope="col">DOB</th>
                                    <th scope="col">Course</th>
                                    <th scope="col">Mobile</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">__V</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(
                                        (value, index) => {
                                            return <tr>
                                                <td>{value._id}</td>
                                                <td>{value.firstname}</td>
                                                <td>{value.lastname}</td>
                                                <td>{value.college}</td>
                                                <td>{value.dob}</td>
                                                <td>{value.course}</td>
                                                <td>{value.mobile}</td>
                                                <td>{value.email}</td>
                                                <td>{value.address}</td>
                                                <td>{value.__v}</td>
                                            </tr>
                                        }
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewFisat
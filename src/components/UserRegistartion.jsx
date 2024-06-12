import axios from 'axios'
import React, { useState } from 'react'

const UserRegistartion = () => {
    const [data, setData] = useState(
        {
            "name": "",
            "dob": "",
            "blood": "",
            "mobile": "",
            "address": "",
            "pin": "",
            "district": "",
            "place": "",
            "email": "",
            "username": "",
            "pass": "",
            "cpass":""
        }
    )
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const readValue = () => {

if (data.pass != data.cpass) {
    alert("password doesnt mathchh!")
    
}
else
{
        console.log(data)
        axios.post("http://localhost:8080/add", data).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("Successes")
                }
                else {
                    alert("Error")
                }
            }
        )

    }
    }
  return (
    <div>
       
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Name:</label>
                                <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">DOB:</label>
                                <input type="date" name="dob" id="" className="form-control" value={data.dob} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Blood Group:</label>
                                <select name="district" id="" className="form-control">
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                </select>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Mobile:</label>
                                <input type="text" className="form-control" name='mobile' value={data.mobile} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Address:</label>
                                <input type="text" className="form-control" name='address' value={data.address} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">pin:</label>
                                <input type="text" className="form-control" name='pin' value={data.pin} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">District:</label>
                             <select name="" id="" className="form-control">
                                <option value="Thrissur">Thrissur</option>
                                <option value="Tvm">Tvm</option>
                                <option value="Kottayam">Kottayam</option>
                                <option value="Palakkad">Palakkad</option>
                                <option value="Ernakulam">Ernakulam</option>
                             </select>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">place:</label>
                                <input type="text" className="form-control" name='place' value={data.place} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Email:</label>
                                <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Userame:</label>
                                <input type="text" className="form-control" name='username' value={data.username} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Password:</label>
                                <input type="text" className="form-control" name='pass' value={data.pass} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Confirm Password:</label>
                                <input type="text" className="form-control" name='cpass' value={data.cpass} onChange={inputHandler} />
                            </div>


                        
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValue}>SUBMIT</button>

                        </div>
</div>


                    </div>
                </div>
            </div>
    </div>
  )
}

export default UserRegistartion

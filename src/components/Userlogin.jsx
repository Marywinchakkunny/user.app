import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Userlogin = () => {

    
        const [data, setData] = useState(
            {
               "username":"",
               "password":""
    
            }
        )
        const inputHandler = (event) => {
            setData({ ...data, [event.target.name]: event.target.value })
        }
        const readValue = () => {
            console.log(Object)
                }
            
  return (
    <div>
      <div>
            
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">username</label>
                                <input type="text" className="form-control" name='username' id='username' value={data.username} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">password</label>
                                <input type="text" className="form-control" name='password' id='password' value={data.password} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <div className="btn btn-success" onClick={readValue}>Submit</div>
                            </div>
                           <div><center>
                           <Link class="nav-link" to="/register">new user?sign up here</Link>
                           </center>
                           </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </div>
    
  )
}

export default Userlogin

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {loginUser} from '../redux/auth/authSlice'
import { useNavigate } from 'react-router-dom'

function Login() {
    const {isSuccess} = useSelector((state) => state.auth)
    const navigate = useNavigate()
    const [formData,setFormData] = useState({
        email:'',
        password:''
    })
    const dispatch = useDispatch()
    const getData = (e) =>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const handleSubmit = (e)  =>{
        e.preventDefault()
        dispatch(loginUser(formData))
    }
    useEffect(()=>{
        if(isSuccess){
            navigate('/homepage')
        }
    },[isSuccess])

    return (
        <>
            <div className="Auth-form-container">
                <form onSubmit={handleSubmit} className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign In</h3>
                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="Enter email"
                                name="email"
                                onChange={getData}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter password"
                                name="password"
                                onChange={getData}
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login
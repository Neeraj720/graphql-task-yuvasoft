import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { userDetails } from '../redux/auth/authSlice'
import { useDispatch, useSelector } from 'react-redux'

function View() {
    const { id } = useParams()
    const { userData } = useSelector((state) => state.auth)
    console.log("user Data:", userData)
    const dispatch = useDispatch()
    const userId = { userId: id }
    useEffect(() => {
        dispatch(userDetails(userId))
    }, [id])
    console.log(id, "id")
    return (
        <>
            <div className='vh-100 d-flex align-items-center justify-content-center'>
                <div>
                    <Link to="/homepage" className='btn btn-success mb-3'>Back</Link>
                    <div class="card" style={{ width: "18rem" }}>
                        <div class="card-body">
                            <h5 class="card-title">User Details</h5> <br />
                            <h6 class="card-subtitle mb-2 text-muted"><strong>Name</strong>: {userData?.name}</h6>
                            <h6 class="card-subtitle mb-2 text-muted"><strong>Email</strong>: {userData?.email}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default View
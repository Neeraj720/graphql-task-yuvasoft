import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allUser, reSetState } from '../redux/auth/authSlice'
import { Link, useNavigate } from 'react-router-dom'

function HomePage() {
  const { allUserData } = useSelector((state) => state.auth)
  console.log("allUserData length:", allUserData.length)
  const [pageNo, setPageNo] = useState("1")
  const [pageSize, setPageSize] = useState("10")
  const page = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const size = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    const data = { page: pageNo, size: pageSize }
    console.log("data size:", data)
    dispatch(allUser(data))
  }, [pageNo, pageSize])

  // handleView

  const handleView = (id) => {
    navigate(`/view/${id}`)
  }
  // handle logout
  const handleLogOut = () =>{
    localStorage.clear()
    dispatch(reSetState())
    navigate('/')
    window.location.reload()
  }
  return (
    <>
      <div className="container mt-3">
        <div className='header d-flex align-items-center justify-content-between'>
          <Link to='/location' className='btn btn-success mt-3 mb-3'>Location</Link>
          <h4 className='title text-center'>All User List</h4>
          <button onClick={handleLogOut} className='btn btn-danger mt-3 mb-3'>Logout</button>
        </div>
        <div className="table-container">
          <div className='table-scroll'>
            <table className="table table-dark">
              <thead>
                <tr>
                  <th className='text-center'>#</th>
                  <th className='text-center'>First</th>
                  <th className='text-center'>Email</th>
                  <th className='text-center'>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  allUserData.map((item, index) => {
                    return <>
                      <tr key={item.id}>
                        <td className='text-center'>{index + 1}</td>
                        <td className='text-center'>{item.name}</td>
                        <td className='text-center'>{item.email}</td>
                        <td className='text-center'>
                          <button onClick={() => handleView(item.id)} className='btn btn-success'>View User</button>
                        </td>
                      </tr>
                    </>
                  })
                }
              </tbody>
            </table>
          </div>
          <div className="pagination d-flex justify-content-between">
            <select
              className="select"
              onChange={(e) => setPageNo(e.target.value)}
            >
              <option value="">Select Page</option>
              {page.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <select
              className="select"
              onChange={(e) => setPageSize(e.target.value)}
            >
              <option value="">Select Page Size</option>
              {size.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

      </div>
    </>
  )
}

export default HomePage
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCities, getAllCountry, getAllStates } from '../redux/location/locationSlice'
import { Link } from 'react-router-dom'

function Location() {
    const dispatch = useDispatch()
    const { allCountry, allStates,allCity } = useSelector((state) => state.location)
    useEffect(() => {
        dispatch(getAllCountry())
    }, [dispatch])
    // States 
    const handleStates = (id) => {
        const statesId = {
            statesId: id
        }
        dispatch(getAllStates(statesId))
    }
    // Cities
    const handleCities = (id) =>{
        const citiesId = {
            citiesId:id
        }
        dispatch(getAllCities(citiesId))
    }
    return (
        <>
            <div className='container'>
                <div className="d-flex justify-content-between mt-3">
                    <div>
                        <h4 className='title'>Location</h4>
                    </div>
                    <div>
                        <Link to='/homepage' className='text-danger'>
                            Home
                        </Link>
                    </div>
                </div>
                <div className='d-flex align-items-center justify-content-center vh-100 '>
                    <div className='inner-div'>
                        <div className="row">
                            {/* Countries Data */}
                            <div className="col-md-4">
                                <h4 className='text-white text-center'>Countries</h4>
                                <div className='country-list'>
                                    <ul>
                                        {
                                            allCountry.map((country,index) => {
                                                return <>
                                                    <li key={index} onClick={() => handleStates(country.id)}>
                                                        {country.name}
                                                    </li>
                                                </>
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                            {/* State Data */}
                            <div className="col-md-4">
                                <h4 className='text-white text-center'>States</h4>
                                {
                                    allStates && allStates.length > 0 ?
                                        (
                                            <div className='country-list'>
                                                <ul>
                                                    {
                                                        allStates.map((state,index) => {
                                                            return <>
                                                                <li key={index} onClick={() => handleCities(state.id)}>
                                                                    {state.name}
                                                                </li>
                                                            </>
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        ) : (
                                            <h6 className='text-white mt-3 text-center'>There is no state available</h6>
                                        )

                                }
                            </div>
                            {/* Cities Data */}
                            <div className="col-md-4">
                                <h4 className='text-white text-center'>Cities</h4>
                                {
                                    allCity && allCity.length > 0 ?
                                        (
                                            <div className='country-list'>
                                                <ul>
                                                    {
                                                        allCity.map((city,index) => {
                                                            return <>
                                                                <li key={index}>
                                                                    {city.name}
                                                                </li>
                                                            </>
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        ) : (
                                            <h6 className='text-white mt-3 text-center'>There is no City available</h6>
                                        )

                                }
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Location
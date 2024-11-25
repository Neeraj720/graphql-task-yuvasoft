import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import client from "../apollo/client";
import { allCities, allCountry, allStates } from "./locationService";


const slice = createSlice({
    name:"location",
    initialState:{
        allCountry:[],
        isLoading:false,
        isError:false,
        isSuccess:false,
        message:'',
        allStates:[],
        allCity:[]
    },
    reducers:{

    },
    extraReducers:(builder) =>{
        builder
        // all countury
        .addCase(getAllCountry.pending,(state,action)=>{
            state.isLoading = true
            state.isError = false
            state.isSuccess = false
        })
        .addCase(getAllCountry.fulfilled,(state,action)=>{
            // console.log("action:" , action.payload)
            state.isLoading = false
            state.isSuccess = true
            state.allCountry =action.payload
            state.isError = false
        })
        .addCase(getAllCountry.rejected,(state,action)=>{
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
        })
        // state data
        .addCase(getAllStates.pending,(state,action)=>{
            state.isLoading = true
            state.isError = false
            state.isSuccess = false
        })
        .addCase(getAllStates.fulfilled,(state,action)=>{
            // console.log("action:" , action.payload)
            state.isLoading = false
            state.isSuccess = true
            state.allStates =action.payload
            state.isError = false
        })
        .addCase(getAllStates.rejected,(state,action)=>{
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
        })
        // all cities
        .addCase(getAllCities.pending,(state,action)=>{
            state.isLoading = true
            state.isError = false
            state.isSuccess = false
        })
        .addCase(getAllCities.fulfilled,(state,action)=>{
            // console.log("action:" , action.payload)
            state.isLoading = false
            state.isSuccess = true
            state.allCity =action.payload
            state.isError = false
        })
        .addCase(getAllCities.rejected,(state,action)=>{
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
        })
    }
})
export const getAllCountry = createAsyncThunk("GET/ALL/COUNTURY", async(thunkApi)=>{
    try{
        const response = await client.query({
            query:allCountry,
        })
        console.log("response is :" ,  response.data)
        return response.data.countries
    }
    catch(error){
        console.log("error :" ,error)
        return thunkApi.rejectWithValue(error)
    }
})

// get all states
export const getAllStates = createAsyncThunk("GET/ALL/STATES" , async(data,thunkApi)=>{
    try{
        const response = await client.query({
            query:allStates,
            variables:data
        })
        console.log(response ,"satates is")
        return response.data.states
    }
    catch(error){
        console.log("error :" ,error)
        return thunkApi.rejectWithValue(error)
    }
})
// get all cieties
export const getAllCities = createAsyncThunk("GET/ALL/Cities" , async(data,thunkApi)=>{
    try{
        const response = await client.query({
            query:allCities,
            variables:data
        })
        console.log(response ,"cities is")
        return response.data.cities
    }
    catch(error){
        console.log("error :" ,error)
        return thunkApi.rejectWithValue(error)
    }
})
export default slice.reducer




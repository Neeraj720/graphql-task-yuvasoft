import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import client from "../apollo/client";
import { allUserList, getUserDetails, userLogin } from "./authService";

const slice = createSlice({
    name:"auth",
    initialState:{
        user:null,
        isLoading:false,
        isError:false,
        isSuccess:false,
        token:'',
        message:'',
        allUserData:[],
        userData:{},
    },
    reducers:{
      reSetState:(state,action) =>{
        state.isLoading = false
        state.isError = false
        state.isSuccess = false
        state.user = null
      }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(loginUser.pending,(state,action)=>{
            state.isLoading = true
            state.isError = false
            state.isSuccess = false
        })
        .addCase(loginUser.fulfilled,(state,action)=>{
            localStorage.setItem("token", action.payload.token)
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.user = action.payload.user
        })
        .addCase(loginUser.rejected,(state,action)=>{
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
        })
        // all users
        .addCase(allUser.pending,(state,action)=>{
            state.isLoading = true
            state.isError = false
            state.isSuccess = false
        })
        .addCase(allUser.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.allUserData = action.payload
        })
        .addCase(allUser.rejected,(state,action)=>{
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
        })
        // get single user
        .addCase(userDetails.pending,(state,action)=>{
            state.isLoading = true
            state.isError = false
            state.isSuccess = false
        })
        .addCase(userDetails.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.userData = action.payload
        })
        .addCase(userDetails.rejected,(state,action)=>{
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
        })
    }
})

// Login thunk

export const loginUser = createAsyncThunk("LOGIN/USER" ,async(data,thunkApi) =>{
    try{
        const response = await client.mutate({
            mutation:userLogin,
            variables:data
        })
        console.log(response,"response")
        return response.data.login
    }catch(error){
        console.log("error :" ,error)
        return thunkApi.rejectWithValue(error)
    }
})

// all user thunk

export const allUser = createAsyncThunk("FETCH/USER", async(data,thunkApi)=>{
    try{
        const response = await client.query({
            query:allUserList,
            variables:data
        })
        console.log(response.data.users.data,"response")
        return response.data.users.data
    }catch(error){
        console.log("error :" ,error)
        return thunkApi.rejectWithValue(error)
    }
})
// user details

export const userDetails = createAsyncThunk("GET/USER" , async(userId,thunkApi)=>{
    try{
        const response = await client.query({
            query:getUserDetails,
            variables:userId
        })
        console.log("response details:",response.data.user)
        return response.data.user
    }catch(error){
        console.log("error :" ,error)
        return thunkApi.rejectWithValue(error)
    }
})
export const {reSetState} = slice.actions
export default slice.reducer
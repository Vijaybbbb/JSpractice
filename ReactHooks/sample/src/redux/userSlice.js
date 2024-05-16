import {createSlice} from '@reduxjs/toolkit'

const userSlice  = createSlice({
       name:'user',
       initialState:{
              user:{}
       },
       reducers:{
              addData:(state,action)=>{
                     state.user.name = action.payload
              }
       }
})


import { createAsyncThunk, createSlice, createEntityAdapter} from "@reduxjs/toolkit";


export const fetchServices = createAsyncThunk("services/fetchServices", async(name, thunkAPI)=>{
    const{data} = await fetch("http://127.0.0.1:8000/api/services/")
    .then((res)=>res.json())
    return data;
})

//add new service
export const createService = createAsyncThunk("services/createServices", async(name, thunkAPI)=>{
    const{data} = await fetch("http://localhost:8000/api/services",{
        method: "POST",
        headers:{
            Accept:{
                "Content-Type": "application/json"
            }
        },
        body: JSON.stringify()
    })
    .then((response)=>response.json())
})


const serviceSlice = createSlice({
    name: "services",
    initialState:{
        services: [],
        loading: false,
        error: null
    },
    
    extraReducers:{
        [fetchServices.pending]:(state, action)=>{
            state.loading = true

        },
        [fetchServices.fulfilled]:(state, action)=>{
            state.loading = false
            state.services = action.payload
            
        },
        [fetchServices.rejected]:(state, action)=>{
            state.loading = false
            state.error = action.payload
        }
    }
})

export default serviceSlice.reducer
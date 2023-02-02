import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {httpGet} from "../../utils/request";



export const fetchUsers = createAsyncThunk(
    'users/fetchAll',
    async (_, thunkApi) => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        return response.data;
    }
)


export const getToken = createAsyncThunk(
    'auth/token',
    async (_, thunkApi) => {
        const r = await httpGet({url: "/api/financing/get-token-for-user/", withCredentials:true})

        if (r.success === false)
            return thunkApi.rejectWithValue(r.message);
        return r.data
    }
)

export const fetchContracts = createAsyncThunk(
    'app/contracts',
    async (_, thunkApi) => {
        const r = await httpGet({url: "/api/financing/petition-preferential-credit-cluster-by-list/"})

        if (r.success === false)
            return thunkApi.rejectWithValue(r.message);
        return r.data
    }
)

export const fetchBanks = createAsyncThunk(
    'app/banks',
    async (_, thunkApi) => {
        const r = await httpGet({url: "/api/financing/bank-list"})

        if (r.success === false)
            return thunkApi.rejectWithValue(r.message);
        return r.data
    }
)

export const fetchBank = createAsyncThunk(
    'app/bank',
    async (_, thunkApi) => {
        const r = await httpGet({url: `/api/financing/bank-detail/${_}`})

        if (r.success === false)
            return thunkApi.rejectWithValue(r.message);
        return r.data
    }
)

export const fetchContractPage1 = createAsyncThunk(
    'app/contractPage1',
    async (_, thunkApi) => {
        const r = await httpGet({url: `/api/financing/petition-preferential-credit-view/${_}`})

        if (r.success === false)
            return thunkApi.rejectWithValue(r.message);
        return r.data
    }
)

export const fetchContractPage2 = createAsyncThunk(
    'app/contractPage2',
    async (_, thunkApi) => {
        const r = await httpGet({url: `/api/financing/petition-preferential-credit-view-two/${_}`})

        if (r.success === false)
            return thunkApi.rejectWithValue(r.message);
        return r.data
    }
)

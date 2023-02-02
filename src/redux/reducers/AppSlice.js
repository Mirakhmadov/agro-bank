import {createSlice} from "@reduxjs/toolkit";
import {fetchBank, fetchBanks, fetchContractPage1, fetchContractPage2, fetchContracts} from "../actions/ActionCreaters";

const initialState = {
    isLoading: false,
    error: "",
    contracts: [],
    offer: {},
    banks: [],
    bank: {},
    petition1: {},
    petition2: {},
}

export const appSlice = createSlice({
    name: "app",
    initialState: initialState,
    reducers: {
    },
    extraReducers: {
        [fetchContracts.fulfilled]: (state, {payload}) => {
            let obj = {area:0,last:0,gross:0,price:0, arr: [...payload.fyuchers_contract]}

            payload.fyuchers_contract.forEach(item => {
                obj.area += item.total_area
                obj.last += item.total_last_productivity
                obj.gross += item.total_gross_productivity
                obj.price += item.total_price
            })


            state.isLoading = false
            state.error = ''
            state.contracts = obj
            state.offer = payload.offer
        },
        [fetchContracts.pending]: (state) => {
            state.isLoading = true
        },
        [fetchContracts.rejected]: (state, {payload}) => {
            state.isLoading = false
            state.error = payload
        },



        [fetchBanks.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.error = ''
            state.banks = payload
        },
        [fetchBanks.pending]: (state) => {
            state.isLoading = true
        },
        [fetchBanks.rejected]: (state, {payload}) => {
            state.isLoading = false
            state.error = payload
        },

        [fetchBank.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.error = ''
            state.bank = payload
        },
        [fetchBank.pending]: (state) => {
            state.isLoading = true
        },
        [fetchBank.rejected]: (state, {payload}) => {
            state.isLoading = false
            state.error = payload
        },


        [fetchContractPage1.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.error = ''
            state.petition1 = payload
        },
        [fetchContractPage1.pending]: (state) => {
            state.isLoading = true
        },
        [fetchContractPage1.rejected]: (state, {payload}) => {
            state.isLoading = false
            state.error = payload
        },

        [fetchContractPage2.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.error = ''
            state.petition2 = payload
        },
        [fetchContractPage2.pending]: (state) => {
            state.isLoading = true
        },
        [fetchContractPage2.rejected]: (state, {payload}) => {
            state.isLoading = false
            state.error = payload
        }
    }
})

export default appSlice.reducer

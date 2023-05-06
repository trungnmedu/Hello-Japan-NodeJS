import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice(
    {
        name: 'account',
        initialState: {
            account: {}
        },
        reducers: {
            setAccount: (state, action) => {
                const { payload } = action
                state.account = payload
            }
        }
    }
)

export const { setAccount } = accountSlice.actions
export default accountSlice.reducer

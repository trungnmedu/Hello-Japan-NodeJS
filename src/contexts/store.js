import accountSlice from '@contexts/account'
import { configureStore } from '@reduxjs/toolkit'


const store = configureStore(
    {
        reducer: {
            auth: accountSlice
        }
    }
)

export default store

import { configureStore } from '@reduxjs/toolkit'
import numberReducer from './reducer/numberReducer'
import  facebookReducer  from './reducer/facebookReducer'

export const store = configureStore({
    reducer:{
        number: numberReducer,
        facebookReducer:facebookReducer
    }
})

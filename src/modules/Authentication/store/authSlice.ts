import { createSlice } from '@reduxjs/toolkit'

interface AuthState {
  isAuth: boolean
}

const initialState: AuthState = {
  isAuth: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeAuth: (state) => {
      state.isAuth = !state.isAuth
    },
  },
})

export const { changeAuth } = authSlice.actions

export default authSlice.reducer

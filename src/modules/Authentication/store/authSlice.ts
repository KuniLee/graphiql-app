import { createSlice } from '@reduxjs/toolkit'
// import { User } from 'firebase/auth'
// import { signIn } from '@/modules/Authentication/firebase'

// export type UserData = Pick<User, 'email' | 'uid'> & {
//   accessToken: string
//   uid: string
// }

interface AuthState {
  test: null
}

const initialState: AuthState = {
  test: null,
}

// export const login = createAsyncThunk<UserData, { email: string; password: string }, { rejectValue: string }>(
//   'auth/login',
//   async ({ email, password }, { rejectWithValue }) => {
//     try {
//       const result = await signIn(email, password)
//       const user = result.user as unknown as UserData
//
//       return { email: user.email, uid: user.uid, accessToken: user.accessToken }
//     } catch (error) {
//       return rejectWithValue(error instanceof Error ? error.message : 'Error')
//     }
//   }
// )

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(login.fulfilled, (state, action) => {
  //       state.user = action.payload
  //       state.error = null
  //     })
  //     .addCase(login.rejected, (state, action) => {
  //       state.user = null
  //       state.error = action.payload || 'Error'
  //     })
  // },
})

export default authSlice.reducer

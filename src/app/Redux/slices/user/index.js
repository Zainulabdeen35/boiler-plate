import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {
    email: null,
    firstName: null,
    lastName: null,
    id: null,
  },
  isLoadingUser: false,
}

const userSlice = createSlice({
  name: `user`,

  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload
      state.isLoadingUser = false
    },

    unsetUser: (state) => {
      state.user = initialState.user
      state.isLoadingUser = false
    },
    loadingUser: (state) => {
      state.isLoadingUser = true
    },
  },
})

export const { setUser, unsetUser, loadingUser } = userSlice.actions

export const user = userSlice.reducer

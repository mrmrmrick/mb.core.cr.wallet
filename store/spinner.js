import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'spinner',

  initialState: {
    loading: false,
  },

  reducers: {
    startLoading: (state) => {
      console.log("load")
      return ({
        ...state, loading: true
      })
    },
    endLoading: (state) => ({
      ...state, loading: false
    })
  }
})

export const spinnerActions = { ...slice.actions }

export const spinner = slice.reducer
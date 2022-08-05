import { createSlice } from '@reduxjs/toolkit'

export const chatScriptSlice = createSlice({
  name: 'chatScript',
  initialState: {
    value: 'script:none'
  },
  reducers: {
    startBaseScript: state => {
      state.value = 'script:base'
    }
  }
})

export default chatScriptSlice.reducer
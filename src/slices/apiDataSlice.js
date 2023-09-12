import { createSlice } from '@reduxjs/toolkit';

const apiDataSlice = createSlice({
    name: 'apiData',
    initialState: null,
    reducers: {
      setApiData: (state, action) => action.payload,
    },
  });
  
  export const { setApiData } = apiDataSlice.actions;
  
  export default apiDataSlice.reducer;
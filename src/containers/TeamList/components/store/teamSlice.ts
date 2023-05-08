import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getTeam } from "./teamThunk";

export type Teammate = {
    info: string,
    name: string,
    avatar?: string
  }
  
  type initialStateType = {
    team: Teammate[]
    loading: boolean;
  }
  
  const initialState: initialStateType = {
    team: [],
    loading: false
  };
  
  
  const trusteeSlice = createSlice({
    name: "team",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
      builder 
        .addCase(getTeam.pending, state => {
          state.loading = true
        })
        .addCase(getTeam.fulfilled, (state, action) => {
          state.team = action.payload
          state.loading = false
        })
        .addCase(getTeam.rejected, (state) => {
          state.team = []
          state.loading = false
        })
    }
  })
  
  const { reducer, actions } = trusteeSlice;
  
  export default reducer;
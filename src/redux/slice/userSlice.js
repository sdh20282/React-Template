// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

// export const signIn = createAsyncThunk(`user/signin`, async (tokens) => {
//   return tokens;
// });

// export const signOut = createAsyncThunk("user/signout", async () => {
//   return {};
// });

export const userSlice = createSlice({
  name: "user",
  initialState: {
    token: "",
  },
  reducers: {
    // updateToken(state, action) {
    //   state.token = action.payload.token;

    //   return state;
    // },
    // clearToken(state) {
    //   state.token = "";

    //   return state;
    // }
  },
  // extraReducers(builder) {
  //   builder.addCase(signIn.fulfilled, (state, action) => {
  //     state.token = action.payload.token;
  //   });

  //   builder.addCase(signOut.fulfilled, (state) => {
  //     state.token = "";
  //   });
  // }
});

// export const { updateToken, clearToken } = userSlice.actions;
export default userSlice.reducer;
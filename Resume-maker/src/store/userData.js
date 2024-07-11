// import { createSlice } from "@reduxjs/toolkit";

// const userSlice = createSlice({
//     name: 'user',
//     initialState,
//     reducers: {
//       setUserField: (state, action) => {
//         const { field, value } = action.payload;
//         state.user[field] = value;
//       },
//       setLoading: (state, action) => {
//         state.loading = action.payload;
//       },
//       setError: (state, action) => {
//         state.error = action.payload;
//       },
//       resetUserState: (state) => {
//         state.user = initialState.user; // Reset user object to initial state
//         state.loading = initialState.loading; // Reset loading state
//         state.error = initialState.error; // Reset error state
//       },
//     },
//   });
//   export const { setUserField, setLoading, setError, resetUserState } = userSlice.actions;
//   export default userSlice.reducer;  
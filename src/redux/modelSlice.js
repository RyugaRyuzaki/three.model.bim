import { createSlice } from "@reduxjs/toolkit";
const modelSlice = createSlice({
	name: "model",
	initialState: {
		typing: 0,
		isModeling: false,
	},
	reducers: {
		setModelType: (state, action) => {
			const { typing, isModeling } = action.payload;
			state.typing = typing;
			state.isModeling = isModeling;
		},
	},
});
export const { setModelType } = modelSlice.actions;
export default modelSlice.reducer;

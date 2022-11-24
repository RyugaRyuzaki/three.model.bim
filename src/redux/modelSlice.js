import { createSlice } from "@reduxjs/toolkit";
const modelSlice = createSlice({
	name: "model",
	initialState: {
		drawing: 0,
		isModeling: false,
	},
	reducers: {
		setModelType: (state, action) => {
			const { drawing, isModeling } = action.payload;
			state.drawing = drawing;
			state.isModeling = isModeling;
		},
	},
});
export const { setModelType } = modelSlice.actions;
export default modelSlice.reducer;

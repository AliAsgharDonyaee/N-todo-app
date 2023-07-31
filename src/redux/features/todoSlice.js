import { createSlice } from "@reduxjs/toolkit";
import { getAsyncTodos } from "./thunk";

export const todoSlice = createSlice({
	name: "todoDatas",
	initialState: {
		loading: false,
		todos: null,
		sort: "all",
		error: null,
	},
	reducers: {
		sorting: (state, action) => {
			return {
				todos: [...state.todos],
				sort: action.payload,
				loading: false,
				error: null,
			};
		},
	},
	extraReducers: {
		// todos
		[getAsyncTodos.pending]: (state, action) => {
			return {
				...state,
				todos: [],
				loading: true,
				error: null,
			};
		},
		[getAsyncTodos.fulfilled]: (state, action) => {
			return {
				...state,
				todos: action.payload,
				loading: false,
				error: null,
			};
		},
		[getAsyncTodos.rejected]: (state, action) => {
			return {
				...state,
				todos: [],
				loading: true,
				error: action.error,
			};
		},
	},
});

export const { sorting, sortingData } = todoSlice.actions;

export default todoSlice.reducer;

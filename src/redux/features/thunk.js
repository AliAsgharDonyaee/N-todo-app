import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAsyncTodos = createAsyncThunk("todos/getAsyncTodos", async (_, { rejectWithValue }) => {
	try {
		const res = await axios.get("http://localhost:4000/todos");
		return res.data;
	} catch (error) {
		return rejectWithValue([], error.message);
	}
});

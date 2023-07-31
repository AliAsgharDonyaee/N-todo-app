import axios from "axios";
import React, { useEffect, useState } from "react";
import { errorHandler } from "../utils/functions";

function Details() {
	const [state, setState] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:4000/todos")
			.then((res) => {
				setState(res.data);
			})
			.catch((err) => errorHandler(err.message));
	}, [state]);

	return (
		<div className='mx-auto w-11/12 h-1/3 border-b-2 border-gray-200 dark:border-slate-500 grid grid-cols-2 grid-rows-2 gap-4'>
			<div className='my-auto w-full h-1/2 flex items-center'>
				<div className='mr-2 w-1 h-full bg-lime-500 rounded-full'></div>
				<div>
					<p className='text-base text-gray-400'>total todos</p>
					<p className='text-xl text-slate-800 dark:text-white'>{state?.length}</p>
				</div>
			</div>
			<div className='my-auto w-full h-1/2 flex items-center'>
				<div className='mr-2 w-1 h-full bg-rose-600 rounded-full'></div>
				<div>
					<p className='text-base text-gray-400'>completed</p>
					<p className='text-xl text-slate-800 dark:text-white'>
						{Object.values(state).reduce((a, { completed }) => a + completed, 0) | 0}
					</p>
				</div>
			</div>
			<div className='my-auto w-full h-1/2 flex items-center'>
				<div className='mr-2 w-1 h-full bg-blue-700 dark:bg-sky-600 rounded-full'></div>
				<div>
					<p className='text-base text-gray-400'>liked</p>
					<p className='text-xl text-slate-800 dark:text-white'>
						{Object.values(state).reduce((a, { like }) => a + like, 0) | 0}
					</p>
				</div>
			</div>
			<div className='my-auto w-full h-1/2 flex items-center'>
				<div className='mr-2 w-1 h-full bg-orange-500 datk:bg-orange-500 rounded-full'></div>
				<div>
					<p className='text-base text-gray-400'>stared</p>
					<p className='text-xl text-slate-800 dark:text-white'>
						{Object.values(state).reduce((a, { star }) => a + star, 0) | 0}
					</p>
				</div>
			</div>
		</div>
	);
}

export default Details;

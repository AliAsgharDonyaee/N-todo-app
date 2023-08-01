import React from "react";
import Actions from "../components/Actions";
import { useDispatch, useSelector } from "react-redux";
import { errorHandler } from "../utils/functions";
import { getAsyncTodos } from "../redux/features/thunk";
import { useEffect } from "react";

function Todos({ layout }) {
	const style = "bg-gray-200 dark:bg-slate-500 rounded-full animate-pulse";

	const { todos, sort, loading, error } = useSelector((state) => state.todos);
	const dispatch = useDispatch();

	const getDatas = async () => {
		try {
			return dispatch(getAsyncTodos());
		} catch (err) {
			return errorHandler(err.message);
		}
	};

	useEffect(() => {
		getDatas();
	}, []);

	function sortingF() {
		if (todos) {
			if (sort === "all") {
				return todos;
			} else {
				const d = [...todos].sort((a, b) =>
					sort === "latest"
						? b.id - a.id
						: sort === "likes"
						? b.like - a.like
						: sort === "stars"
						? b.star - a.star
						: sort === "completed"
						? b.completed - a.completed
						: null,
				);
				return d;
			}
		}
	}

	if (error) errorHandler("can't data\nplease run json-server");

	return (
		<section
			className={`w-full h-full ${
				layout === "grid" ? "grid grid-cols-4 grid-flow-row" : "flex flex-col"
			} gap-4 relative`}
		>
			{loading ? (
				<div
					className={`p-2 px-3 w-full ${
						layout === "grid" ? "h-64" : "h-40"
					} bg-white dark:bg-slate-600 rounded-lg flex justify-between flex-col static`}
				>
					<div className='w-full h-auto overflow-y-scroll'>
						<div className={` mt-2 mb-6 w-48 ${style}`}></div>
						<div className={`mb-2 w-40 h-3 ${style}`}></div>
						<div className={`mb-2 w-36 h-3 ${style}`}></div>
						<div className={`mb-2 w-32 h-3 ${style}`}></div>
					</div>
					<div className='w-full h-8 flex static'>
						<div className={`mr-2 w-8 ${style}`}></div>
						<div className={`mr-2 w-8 ${style}`}></div>
						<div className={`w-8 h-8  ${style}`}></div>
					</div>
				</div>
			) : sortingF()?.length == 0 ? (
				<p className='text-slate-500 dark:text-white text-sm'>you no have todo ;(</p>
			) : (
				sortingF()?.map((i) => (
					<div
						key={i.id}
						className={`p-2 px-3 w-full ${
							layout === "grid" ? "h-64" : "h-40"
						} bg-white dark:bg-slate-500 rounded-lg flex justify-between flex-col static`}
					>
						<div className='w-full h-auto overflow-y-scroll'>
							<h2 className='mb-2 text-slate-800 text-xl dark:text-white'>{i.title}</h2>
							<div className='w-full h-auto'>
								<p className='text-slate-500 text-sm dark:text-white'>{i.description}</p>
							</div>
						</div>
						<Actions i={i} />
					</div>
				))
			)}
		</section>
	);
}

export default React.memo(Todos);

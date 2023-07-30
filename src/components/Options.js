import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { errorHandler } from "../utils/functions";

function Options() {
	const [show, setShow] = useState(false);
	const [state, setState] = useState(null);
	const [sortDir, setSortDir] = useState("lowtohigh");

	useEffect(() => {
		axios
			.get("http://localhost:4000/todos")
			.then((res) => setState(res.data))
			.catch((err) => errorHandler(err.message));
	}, [state]);

	function onSelectionChange(e) {
		const sortDirection = e.target.value;
		const copyArray = [...state];

		copyArray.sort((a, b) => {
			return sortDirection === "0" ? a.date - b.date : b.date - a.date;
		});
		setState(copyArray);
	}

	console.log(sortDir);
	return (
		<div className='relative inline-block text-left'>
			<div>
				<button
					defaultValue={0}
					id='menu-button'
					aria-expanded='true'
					aria-haspopup='true'
					onClick={() => setShow(!show)}
					onChange={onSelectionChange}
					className='inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-slate-700'
				>
					Sorting
					<IoIosArrowDown
						className={`-mr-1 h-5 w-5 text-gray-400 transition duration-300 ${
							show ? "rotate-180" : "rotate-0"
						}`}
					/>
				</button>
			</div>

			<div
				className={`${
					show ? "block" : "hidden"
				} absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
				role='menu'
				aria-orientation='vertical'
				aria-labelledby='menu-button'
			>
				<div className='py-1' role='none'>
					{/* <option
						className='text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-100'
						role='menuitem'
						id='menu-item-0'
						value='all'
					>
						all
					</option> */}
					<option
						className='text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-100'
						role='menuitem'
						id='menu-item-1'
						value={1}
					>
						lowest date
					</option>
					<option
						className='text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-100'
						role='menuitem'
						id='menu-item-2'
						value={2}
					>
						highest date
					</option>
				</div>
			</div>
		</div>
	);
}

export default Options;

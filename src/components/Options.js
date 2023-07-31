import { useState } from "react";
import { useDispatch } from "react-redux";
import { sorting } from "../redux/features/todoSlice";

function Options() {
	const [show, setShow] = useState(false);
	const dispatch = useDispatch();

	return (
		<div className='relative inline-block text-left'>
			<div>
				<select
					defaultValue={0}
					id='menu-button'
					aria-expanded='true'
					aria-haspopup='true'
					onClick={() => setShow(!show)}
					onChange={(e) => dispatch(sorting(e.target.value))}
					className='inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-slate-700 dark:text-white tracking-wider focus:outline-none'
				>
					<option
						className='text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-100'
						role='menuitem'
						id='menu-item-0'
						value='all'
					>
						sorting(all)
					</option>
					<option
						className='text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-100'
						role='menuitem'
						id='menu-item-1'
						value='latest'
					>
						latest
					</option>
					<option
						className='text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-100'
						role='menuitem'
						id='menu-item-2'
						value='likes'
					>
						likes
					</option>
					<option
						className='text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-100'
						role='menuitem'
						id='menu-item-2'
						value='stars'
					>
						stars
					</option>
					<option
						className='text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-100'
						role='menuitem'
						id='menu-item-2'
						value='completed'
					>
						completed
					</option>
				</select>
			</div>
		</div>
	);
}

export default Options;

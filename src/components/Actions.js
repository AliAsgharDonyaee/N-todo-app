import { FaHeart, FaStar, FaCheck, FaTrash } from "react-icons/fa";
import { errorHandler } from "../utils/functions";
import axios from "axios";

function Actions({ i }) {
	const changeHandlerLike = async (i) => {
		await axios
			.put(`http://localhost:4000/todos/${i.id}`, {
				title: i.title,
				description: i.description,
				like: !i.like,
				star: i.star,
				completed: i.completed,
				id: i.id,
			})
			.catch((err) => errorHandler(err.message));
	};

	const changeHandlerStar = async (i) => {
		await axios
			.put(`http://localhost:4000/todos/${i.id}`, {
				title: i.title,
				description: i.description,
				like: i.like,
				star: !i.star,
				completed: i.completed,
				id: i.id,
			})
			.catch((err) => errorHandler(err.message));
	};

	const changeHandlerCom = async (i) => {
		await axios
			.put(`http://localhost:4000/todos/${i.id}`, {
				title: i.title,
				description: i.description,
				like: i.like,
				star: i.star,
				completed: !i.completed,
				id: i.id,
			})
			.catch((err) => errorHandler(err.message));
	};

	const changeHandlerTrash = async (i) => {
		await axios.delete(`http://localhost:4000/todos/${i.id}`).catch((err) => errorHandler(err.message));
	};

	return (
		<div className='w-full h-8 flex static'>
			<div className='w-1/2 h-full flex justify-start items-center'>
				<button
					className={`w-8 h-8 bg-rd-500 rounded-full flex justify-center items-center text-rose-500`}
					onClick={(e) => changeHandlerTrash(i)}
				>
					<FaTrash />
				</button>
				<button
					className={`w-8 h-8 bg-rd-500 rounded-full flex justify-center items-center ${
						i.completed ? "text-green-500" : "text-gray-300 transition active:text-green-500"
					}`}
					onClick={(e) => changeHandlerCom(i)}
				>
					<FaCheck />
				</button>
			</div>
			<div className='w-1/2 h-full flex justify-end items-center'>
				<button
					className={`w-8 h-8 bg-rd-500 rounded-full flex justify-center items-center ${
						i.like ? "text-red-500" : "text-gray-300 transition active:text-red-500"
					}`}
					onClick={(e) => changeHandlerLike(i)}
				>
					<FaHeart />
				</button>
				<button
					className={`w-8 h-8 bg-rd-500 rounded-full flex justify-center items-center ${
						i.star ? "text-orange-500" : "text-gray-300 transition active:text-orange-500"
					}`}
					onClick={(e) => changeHandlerStar(i)}
				>
					<FaStar className='text-lg' />
				</button>
			</div>
		</div>
	);
}

export default Actions;

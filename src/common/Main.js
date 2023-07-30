import { HiViewGrid, HiMenu } from "react-icons/hi";
import Options from "../components/Options";

function Main({ layout, setLayout }) {
	return (
		<>
			<header className='w-full h-12 flex'>
				<div className='w-1/2 h-full flex justify-start items-center'>
					<HiViewGrid
						className={`text-2xl mr-2 ${
							layout === "grid" ? "text-slate-800" : "text-gray-400"
						} cursor-pointer `}
						onClick={() => setLayout("grid")}
					/>
					<HiMenu
						className={`text-2xl ${layout === "flex" ? "text-slate-800" : "text-gray-400"} cursor-pointer `}
						onClick={() => setLayout("flex")}
					/>
				</div>
				<div className='w-1/2 h-full flex justify-end items-center'>
					<Options />
				</div>
			</header>
		</>
	);
}

export default Main;

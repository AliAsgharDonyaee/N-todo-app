import { useState } from "react";
import { RiNotification4Line, RiSearchLine, RiHeadphoneLine } from "react-icons/ri";
import Formm from "../common/Form";
import UseDarkMode from "../hooks/DarkMode";
import { DarkModeSwitch } from "react-toggle-dark-mode";
function Header() {
	const [modal, setModal] = useState(false);
	const [colorTheme, setTheme] = UseDarkMode();
	const [darkSide, setDarkSide] = useState(colorTheme === "light" ? true : false);

	return (
		<header className='w-full h-20 flex'>
			<nav className='w-1/2 h-full flex justify-start items-center'>
				<h1 className='mr-4 text-2xl text-slate-700 dark:text-white'>Todolist</h1>
				<p className='text-gray-400'>Codawin</p>
			</nav>
			<nav className='w-1/2 h-full flex justify-start items-center flex-row-reverse'>
				<div className='ml-3 w-10 h-10 border-2 border-gray-200 dark:border-slate-600 rounded-full flex justify-center items-center cursor-pointer'>
					<RiNotification4Line className='w-full h-full p-2 text-gray-600 dark:text-white hover:text-primary' />
				</div>
				<div className='ml-3 w-10 h-10 border-2 border-gray-200 dark:border-slate-600 rounded-full flex justify-center items-center cursor-pointer'>
					<RiHeadphoneLine className='w-full h-full p-2 text-gray-600 dark:text-white hover:text-primary' />
				</div>
				<div className='ml-3 w-10 h-10 border-2 border-gray-200 dark:border-slate-600 rounded-full flex justify-center items-center cursor-pointer'>
					<RiSearchLine className='w-full h-full p-2 text-gray-600 dark:text-white hover:text-primary' />
				</div>
				<div className='ml-12 w-10 h-10 p-2 border-2 border-gray-200 dark:border-slate-600 rounded-full flex justify-center items-center cursor-pointer'>
					<DarkModeSwitch
						checked={darkSide}
						onChange={(checked) => {
							setTheme(colorTheme);
							setDarkSide(checked);
						}}
						sunColor='rgb(107 114 128)'
						moonColor='#ffffff'
						size={20}
						className='w-full h-full'
					/>
				</div>
				<div>
					<button
						className='rounded-full w-36 h-10 bg-primary shadow-md shadow-primary/50 text-white active:bg-primary/75'
						onClick={() => setModal(!modal)}
					>
						new todo
					</button>
				</div>
			</nav>
			<div
				className={`w-screen h-screen ${
					modal ? "fixed" : " hidden"
				} top-0 left-0 bg-black/50 flex justify-center items-center z-50`}
			>
				<div className='p-5 w-1/2 h-1/2 bg-white dark:bg-slate-700 rounded-xl'>
					<Formm setModal={setModal} modal={modal} />
				</div>
			</div>
		</header>
	);
}

export default Header;

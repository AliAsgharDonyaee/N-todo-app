import Image from "../assets/Frame 1.svg";

function User() {
	return (
		<div className='mx-auto w-11/12 h-1/3 border-b-2 border-gray-200 dark:border-slate-500 flex justify-center items-center'>
			<div className='w-1/2 h-auto'>
				<h1 className='text-2xl text-slate-700 dark:text-slate-400'>
					Hello, I'M
					<p className='text-slate-800 font-bold dark:text-white'>Ali Donyaee</p>
				</h1>
			</div>
			<div className='w-1/2 h-auto'>
				<img src={Image} alt='user img' className='ring-4 rounded-full ring-gray-200 dark:ring-slate-500' />
			</div>
		</div>
	);
}

export default User;

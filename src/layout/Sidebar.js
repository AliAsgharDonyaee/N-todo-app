import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import Logo from "../assets/Vector 5.svg";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import { TbCoinBitcoin } from "react-icons/tb";
import { TiWeatherCloudy } from "react-icons/ti";
import { FiPieChart } from "react-icons/fi";
import { HiOutlineMap } from "react-icons/hi";
import { useId, useState } from "react";

const Item = [
	{ Icon: RxDashboard },
	{ Icon: TbCoinBitcoin },
	{ Icon: TiWeatherCloudy },
	{ Icon: FiPieChart },
	{ Icon: HiOutlineMap },
];

function Sidebarr() {
	const id = useId();
	const [collapsed, setCollapsed] = useState(true);

	return (
		<Sidebar collapsed={collapsed} className='sidebar w-full h-full bg-white'>
			<div className='first w-full h-full flex flex-col justify-between'>
				<div className='second'>
					<div className='mb-4 ml-3 w-full h-24 flex justify-start items-center'>
						<img src={Logo} alt='logo' className='w-[60px]' />
					</div>
					<Menu>
						{Item.map(({ Icon }) => (
							<MenuItem
								key={id}
								className='ml-2 flex justify-start items-center mb-2 w-full h-full hover:text-violet-700'
							>
								<div className='flex justify-start items-center flex-row text-slate-600 hover:text-violet-700'>
									<Icon className='text-2xl mr-2' />
									{collapsed ? (
										<div className='w-2 h-2 bg-slate-300 rounded-full'></div>
									) : (
										<p>Todo List</p>
									)}
								</div>
							</MenuItem>
						))}
						<div className='mt-4 ml-6 w-full h-full flex justify-start items-center'>
							<div className='w-8 h-8 bg-slate-700 rounded-full flex justify-center items-center'>
								<button className='sb-button' onClick={() => setCollapsed(!collapsed)}>
									<IoIosArrowForward
										className={`text-2xl text-white transition duration-300 ${
											collapsed ? "rotate-0" : "rotate-180"
										}`}
									/>
								</button>
							</div>
						</div>
					</Menu>
				</div>
				<div className='py-4 w-full h-28 flex justify-between items-center flex-col text-slate-600 hover:text-violet-700'>
					<a
						to='https://github.com/AliasgharDevF'
						target='_blank'
						className=' ml-14 flex justify-start items-center w-full h-auto'
					>
						<LuGithub className='text-2xl hover:cursor-pointer mr-1' />
					</a>
					<a
						to='https://www.linkedin.com/in/ali-donyaee-750a51260/'
						target='_blank'
						className=' ml-14 flex justify-start items-center w-full h-auto'
					>
						<LuLinkedin className='text-2xl hover:cursor-pointer mr-1' />
					</a>
				</div>
			</div>
		</Sidebar>
	);
}

export default Sidebarr;

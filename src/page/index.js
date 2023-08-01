import React, { useState } from "react";
import Main from "../common/Main";
import Todos from "../common/Todos";
import Information from "../common/Information";

function HomePage() {
	const [layout, setLayout] = useState("grid");

	return (
		<section className='w-full h-[830px] flex'>
			<div className='p-3 w-3/4 h-full bg-gray-50 dark:bg-slate-700 rounded-2xl'>
				<div className='border-b-2 border-gray-100 dark:border-slate-500'>
					<Main layout={layout} setLayout={setLayout} />
				</div>
				<div className='mt-4 w-full h-11/12 overflow-y-scroll'>
					<Todos layout={layout} />
				</div>
			</div>
			<div className='w-1/4 h-full bg-white dark:bg-slate-800'>
				<Information />
			</div>
		</section>
	);
}

export default HomePage;

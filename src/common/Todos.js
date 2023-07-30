import { useEffect, useState } from "react";
import Actions from "../components/Actions";

function Todos({ layout, datas }) {
	const [state, setState] = useState(null);

	useEffect(() => {
		setState(datas);
	}, [state]);

	return (
		<section
			className={`w-full h-full ${
				layout === "grid" ? "grid grid-cols-4 grid-flow-row" : "flex flex-col"
			} gap-4 relative`}
		>
			{!datas ? (
				<div
					className={`p-2 px-3 w-full ${
						layout === "grid" ? "h-64" : "h-40"
					} bg-white rounded-lg flex justify-between flex-col static`}
				>
					<div className='w-full h-auto overflow-y-scroll'>
						<div className='mt-2 mb-6 w-48 h-3 bg-gray-200 rounded-full animate-pulse'></div>
						<div className=' mb-2 w-40 h-3 bg-gray-200 rounded-full animate-pulse'></div>
						<div className=' mb-2 w-36 h-3 bg-gray-200 rounded-full animate-pulse'></div>
						<div className=' mb-2 w-32 h-3 bg-gray-200 rounded-full animate-pulse'></div>
					</div>
					<div className='w-full h-8 flex static'>
						<div className='mr-2 w-8 h-8 bg-gray-200 rounded-full animate-pulse'></div>
						<div className='mr-2 w-8 h-8 bg-gray-200 rounded-full animate-pulse'></div>
						<div className='w-8 h-8 bg-gray-200 rounded-full animate-pulse'></div>
					</div>
				</div>
			) : (
				datas?.map((i) => (
					<div
						key={i.id}
						className={`p-2 px-3 w-full ${
							layout === "grid" ? "h-64" : "h-40"
						} bg-white rounded-lg flex justify-between flex-col static`}
					>
						<div className='w-full h-auto overflow-y-scroll'>
							<h2 className='mb-2 text-slate-800 text-xl'>{i.title}</h2>
							<div className='w-full h-auto'>
								<p className='text-slate-500 text-sm'>{i.description}</p>
							</div>
						</div>
						<Actions i={i} />
					</div>
				))
			)}
		</section>
	);
}

export default Todos;

import { useEffect, useState } from "react";
import Main from "../common/Main";
import Todos from "../common/Todos";
import Information from "../common/Information";
import axios from "axios";
import { errorHandler } from "../utils/functions";

function HomePage() {
	const [layout, setLayout] = useState("grid");
	const [datas, setDatas] = useState(null);

	useEffect(() => {
		axios
			.get("http://localhost:4000/todos")
			.then((res) => setDatas(res.data))
			.catch((err) => errorHandler(err.message));
	}, [datas && datas]);

	return (
		<section className='w-full h-[830px] flex'>
			<div className='p-3 w-3/4 h-full bg-gray-50 rounded-2xl'>
				<div className='border-b-2 border-gray-20'>
					<Main layout={layout} setLayout={setLayout} />
				</div>
				<div className='mt-4 w-full h-11/12 overflow-y-scroll'>
					<Todos layout={layout} datas={datas} />
				</div>
			</div>
			<div className='w-1/4 h-full bg-white'>
				<Information />
			</div>
		</section>
	);
}

export default HomePage;

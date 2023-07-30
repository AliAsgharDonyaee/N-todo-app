import "./App.css";
import Sidebarr from "./layout/Sidebar";
import Layout from "./layout/Layout";
import toast, { Toaster } from "react-hot-toast";
import HomePage from "./page";

function App() {
	toast("This app is not responsive ", {
		icon: "⚡",
		style: {
			borderRadius: "100px",
			color: "#252525",
			border: "2px solid #8A23DB",
		},
	});
	return (
		<section className='App w-full h-auto flex'>
			<article className='sidebar-article w-auto h-screen fixed left-0 top-0 z-40'>
				<Sidebarr />
			</article>
			<article className='mx-auto container'>
				<Layout>
					<div className='px-3 mt-3 w-full h-auto'>
						<HomePage />
					</div>
					<Toaster position='top-center' reverseOrder={false} />
				</Layout>
			</article>
		</section>
	);
}

export default App;

import Header from "./Header";

function Layout({ children }) {
	return (
		<section className='w-full h-auto'>
			<Header />
			{children}
		</section>
	);
}

export default Layout;

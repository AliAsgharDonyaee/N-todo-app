import axios from "axios";
import { Validation } from "../utils/Validation";
import { errorHandler, successHandler } from "../utils/functions";
import { Field, Form, Formik, useField } from "formik";
import { useDispatch } from "react-redux";

function Formm({ setModal, modal }) {
	const dispatch = useDispatch();

	const MyTextArea = ({ label, ...props }) => {
		const [field, meta] = useField(props);
		return (
			<>
				<div className='flex justify-between'>
					<label className='text-gray-500 dark:text-white' htmlFor={label}>
						{label}
					</label>
					<div className='text-red-500 text-sm'>
						{/* {errors.description && touched.description ? <p>{errors.description}</p> : null}
						{!errors.description && touched.description && <p>✅</p>} */}
						{meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
					</div>
				</div>
				<textarea
					className='text-area px-2 py-1 dark:border-slate-600 dark:text-white dark:bg-transparent transition border-2 text-slate-700 border-gray-300 rounded-md text-xl focus:outline-none focus:border-primary hover:shadow-md dark:hover:border-primary'
					{...field}
					{...props}
				/>
			</>
		);
	};

	return (
		<Formik
			initialValues={{
				title: "",
				description: "",
				like: false,
				star: false,
				date: new Date(),
				completed: false,
			}}
			validationSchema={Validation}
			onSubmit={(data) => {
				axios
					.post("https://z-apis.vercel.app/api/todos", data)
					.then((res) => {
						console.log(res.data);
						window.location.reload();
						// dispatch(getAsyncTodos());
						successHandler();
						setModal(false);
					})
					.catch((err) => {
						setModal(false);
						window.location.reload();
						errorHandler(err.message);
					});
			}}
		>
			{({ errors, touched }) => (
				<Form className='w-full h-full'>
					<div className='mb-4 w-full h-1/6 flex justify-between flex-col'>
						<div className='flex justify-between'>
							<label htmlFor='title' className='text-gray-500 dark:text-white'>
								Title
							</label>
							<div className='text-red-500 text-sm'>
								{errors.title && touched.title ? <p>{errors.title}</p> : null}
								{!errors.title && touched.title && <p>✅</p>}
							</div>
						</div>
						<Field
							type='text'
							name='title'
							id='title'
							placeholder='hello'
							className='w-full h-2/3 px-2 transition border-2 text-slate-700 border-gray-300 dark:border-slate-600 dark:text-white dark:bg-transparent rounded-md text-xl focus:outline-none focus:border-primary hover:shadow-md dark:hover:border-primary'
						/>
					</div>
					<div className='w-full h-4/6 flex justify-between flex-col'>
						<MyTextArea label='description' name='description' rows='11' placeholder='world' />
					</div>
					<div className='py-3 w-full h-1/6 flex justify-between gap-4'>
						<button
							type='submit'
							className='rounded-full w-1/2 h-full bg-primary shadow-md shadow-primary/50 text-white active:bg-primary/75'
						>
							save todo
						</button>
						<button
							type='button'
							className='rounded-full w-1/2 h-full border-2 border-gray-400 text-gray-400 hover:border-primary hover:text-primary dark:hover:text-white dark:hover:border-white transition'
							onClick={() => setModal(!modal)}
						>
							cancel
						</button>
					</div>
				</Form>
			)}
		</Formik>
	);
}

export default Formm;

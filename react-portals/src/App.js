import ToastPortal from "components/ToastPortal/ToastPortal";
import { useState } from "react";
import styles from "./style.module.css";

export const App = () => {
	const [text, setText] = useState("");
	const [mode, setMode] = useState("info");
	const [autoClose, setAutoClose] = useState(false);

	return (
		<div className={styles.main}>
			<h1>Portals and Toast</h1>
			<div className={styles.content}>
				<img
					alt='toaster'
					src='/assets/toaster.svg'
					className={styles.toaster}
				/>
				<form
					onSubmit={(e) => {
						e.preventDefault();
					}}>
					<div className={styles.autoClose}>
						<input
							type='checkbox'
							value={autoClose}
							onChange={(e) => setAutoClose(e.target.checked)}
						/>
						<label>Auto Close</label>
					</div>

					<select value={mode} onChange={(e) => setMode(e.target.value)}>
						<option value='info'>Info</option>
						<option value='success'>Success</option>
						<option value='warning'>Warning</option>
						<option value='error'>Error</option>
					</select>

					<input
						type='text'
						value={text}
						placeholder='Toast Value'
						onChange={(e) => setText(e.target.value)}
					/>
					<button>Submit</button>
				</form>
			</div>

			<ToastPortal />
		</div>
	);
};

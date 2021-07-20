import useToastPortal from "hooks/useToastPortal";
import ReactDOM from 'react-dom';
import styles from './styles.module.css'

function ToastPortal() {
	const { loaded, portalId } = useToastPortal();

	return loaded ? ReactDOM.createPortal(
		<div className={styles.toastContainer}>Toast</div>, document.getElementById(portalId)) : <></>

}

export default ToastPortal;

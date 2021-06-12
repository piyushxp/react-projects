import React from "react";
import "./topbar.scss";
import { NotificationsNone, Settings, Language } from "@material-ui/icons";

function Topbar() {
	let imgUrl =
		"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
	return (
		<div className='topbar'>
			<div className='topbarWrapper'>
				<div className='topLeft'>
					<span className='logo'>Shoppy</span>
				</div>
				<div className='topRight'>
					<div className='topBarIconContainer'>
						<NotificationsNone />
						<span className='topIconBadge'>2</span>
					</div>

					<div className='topBarIconContainer'>
						<Settings />
						<span className='topIconBadge'>4</span>
					</div>

					<div className='topBarIconContainer'>
						<Language />
						<span className='topIconBadge'>9</span>
					</div>

					<img className='topAvatar' src={imgUrl} alt='' />
				</div>
			</div>
		</div>
	);
}

export default Topbar;

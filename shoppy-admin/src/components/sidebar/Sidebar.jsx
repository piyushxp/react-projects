import React from "react";
import "./sidebar.scss";
import LineStyleIcon from "@material-ui/icons/LineStyle";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import TimelineIcon from "@material-ui/icons/Timeline";
import GroupIcon from "@material-ui/icons/Group";
import { Link } from "react-router-dom";

function Sidebar() {
	return (
		<div className='sidebar'>
			<div className='sidebarWrapper'>
				<div className='sidebarMenu'>
					<h3 className='sidebarTitle'>Dashboard</h3>
					<ul className='sidebarList'>
						<Link to='/'>
							<li className='sidebarListItem active'>
								<LineStyleIcon className='sidebarIcon' />
								Home
							</li>
						</Link>
						<li className='sidebarListItem'>
							<TimelineIcon className='sidebarIcon' /> Analytics
						</li>
						<li className='sidebarListItem'>
							<AttachMoneyIcon className='sidebarIcon' /> Sales
						</li>
					</ul>
				</div>

				<div className='sidebarMenu'>
					<h3 className='sidebarTitle'>Staffs</h3>
					<ul className='sidebarList'>
						<Link to='/users'>
							<li className='sidebarListItem '>
								<GroupIcon className='sidebarIcon ' />
								Users
							</li>
						</Link>
						<li className='sidebarListItem'>
							<TimelineIcon className='sidebarIcon' /> Analytics
						</li>
						<li className='sidebarListItem'>
							<AttachMoneyIcon className='sidebarIcon' /> Sales
						</li>
					</ul>
				</div>

				<div className='sidebarMenu'>
					<h3 className='sidebarTitle'>Menu</h3>
					<ul className='sidebarList'>
						<li className='sidebarListItem'>
							<LineStyleIcon className='sidebarIcon' />
							Home
						</li>
						<li className='sidebarListItem'>
							<TimelineIcon className='sidebarIcon' /> Analytics
						</li>
						<li className='sidebarListItem'>
							<AttachMoneyIcon className='sidebarIcon' /> Sales
						</li>
					</ul>
				</div>

				<div className='sidebarMenu'>
					<h3 className='sidebarTitle'>Notifications</h3>
					<ul className='sidebarList'>
						<li className='sidebarListItem'>
							<LineStyleIcon className='sidebarIcon' />
							Home
						</li>
						<li className='sidebarListItem'>
							<TimelineIcon className='sidebarIcon' /> Analytics
						</li>
						<li className='sidebarListItem'>
							<AttachMoneyIcon className='sidebarIcon' /> Sales
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;

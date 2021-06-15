import React from "react";
import "./user.scss";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import {
	CalendarToday,
	LocationOn,
	MailOutline,
	PhoneInTalk,
} from "@material-ui/icons";
import CustomForm from "./form/CustomForm";
import { Link } from "react-router-dom";

function User() {
	const ImgUrl =
		"https://images.pexels.com/photos/7266332/pexels-photo-7266332.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
	return (
		<div className='user'>
			<div className='userTitleContainer'>
				<h1 className='userTitle'>Edit User</h1>
				<Link to='/newUser'>
					<button className='userAddButton'>Create</button>
				</Link>
			</div>

			<div className='userContainer'>
				<div className='userShow'>
					<div className='userShowWrapper'>
						<div className='userShowTop'>
							<img src={ImgUrl} alt='' className='userShowImg' />
						</div>
						<div className='userShowTopTitle'>
							<span className='userShowUsername'>Piyush Mahapatra</span>
							<span className='userShowUserTitle'>Software Developer</span>
						</div>
					</div>
					<div className='userShowBottom'>
						<span className='userShowTitle'>Account Details</span>
						<div className='userShowInfo'>
							<PermIdentityIcon className='userShowInfoIcon' />
							<span className='userShowInfoTitle'>piyush99</span>
						</div>

						<div className='userShowInfo'>
							<CalendarToday className='userShowInfoIcon' />
							<span className='userShowInfoTitle'>12 Dec 1999</span>
						</div>

						<span className='userShowTitle'>Contact Details</span>

						<div className='userShowInfo'>
							<MailOutline className='userShowInfoIcon' />
							<span className='userShowInfoTitle'>piyush@mail.com</span>
						</div>

						<div className='userShowInfo'>
							<PhoneInTalk className='userShowInfoIcon' />
							<span className='userShowInfoTitle'>8074 220 270</span>
						</div>

						<div className='userShowInfo'>
							<LocationOn className='userShowInfoIcon' />
							<span className='userShowInfoTitle'>Hyderabad,India</span>
						</div>
					</div>
				</div>

				<div className='userUpdate'>
					<div className='userUpdateDetails'>Edit</div>
					<CustomForm />
				</div>
			</div>
		</div>
	);
}

export default User;

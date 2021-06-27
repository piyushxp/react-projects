import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import "./navbar.scss";

function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	console.log(isScrolled);
	useEffect(() => {
		window.onscroll = () => {
			setIsScrolled(window.pageYOffset === 0 ? false : true);
		};

		return () => (window.onscroll = null);
	}, []);

	const imageUrl =
		"https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg";
	const accountImageUrl =
		"https://images.pexels.com/photos/7116213/pexels-photo-7116213.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
	return (
		<div className={isScrolled ? "navbar scrolled" : "navbar"}>
			<div className='container'>
				<div className='left'>
					<img src={imageUrl} alt='' className='' />
					<span>Homepage</span>
					<span>Series</span>
					<span>Movies</span>
					<span>New and Popular</span>
					<span>My List</span>
				</div>

				<div className='right'>
					<Search className='icon' />
					<span>KID</span>
					<Notifications className='icon' />
					<img src={accountImageUrl} alt='' />
					<div className='profile'>
						<ArrowDropDown className='icon' />
						<div className='options'>
							<span>Settings</span>
							<span>Logout</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;

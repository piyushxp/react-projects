import { AcUnitRounded } from "@material-ui/icons";
import React from "react";
import Navbar from "../components/navbar/Navbar";
import "./home.scss";

const Home = () => {
	const accountImageUrl =
		"https://images.pexels.com/photos/7116213/pexels-photo-7116213.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
	return (
		<div className='home'>
			<Navbar />
			<img width='100%' src={accountImageUrl} alt='' />
		</div>
	);
};

export default Home;

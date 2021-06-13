import React from "react";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.scss";
import Chart from "../../components/chart/Chart";
import { data } from "../../data/data";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";

function Home() {
	return (
		<div className='home'>
			<FeaturedInfo />
			<Chart data={data} title='User Analytics' grid dataKey='Active Users' />
			<div className='homeWidgets'>
				<WidgetSm />
				<WidgetLg />
			</div>
		</div>
	);
}

export default Home;

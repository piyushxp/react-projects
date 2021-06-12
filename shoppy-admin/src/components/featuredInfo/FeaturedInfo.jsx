import React from "react";
import "./featuredInfo.scss";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

function FeaturedInfo() {
	return (
		<div className='featured'>
			<div className='featuredItem'>
				<div className='featuredTitle'>
					Revenue
					<div className='featuredMoneyContainer'>
						<span className='featuredMoney'>$56,123</span>
						<span className='featuredMoneyRate'>
							+145 <ArrowUpward className='featuredIcon ' />
						</span>
					</div>
					<span className='featuredSub'>Compared to last Month</span>
				</div>
			</div>

			<div className='featuredItem'>
				<div className='featuredTitle'>
					Sales
					<div className='featuredMoneyContainer'>
						<span className='featuredMoney'>$56,123</span>
						<span className='featuredMoneyRate'>
							-34 <ArrowDownward className='featuredIcon negative' />
						</span>
					</div>
					<span className='featuredSub'>Compared to last Month</span>
				</div>
			</div>

			<div className='featuredItem'>
				<div className='featuredTitle'>
					Costs
					<div className='featuredMoneyContainer'>
						<span className='featuredMoney'>$56,123</span>
						<span className='featuredMoneyRate'>
							+195 <ArrowUpward className='featuredIcon ' />
						</span>
					</div>
					<span className='featuredSub'>Compared to last Month</span>
				</div>
			</div>
		</div>
	);
}

export default FeaturedInfo;

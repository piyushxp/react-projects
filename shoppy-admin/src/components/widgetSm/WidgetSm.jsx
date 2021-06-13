import React from "react";
import "./widget.scss";
import { Visibility } from "@material-ui/icons";

function WidgetSm() {
	const imgUrl =
		"https://images.pexels.com/photos/1987042/pexels-photo-1987042.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

	return (
		<div className='widgetSm'>
			<span className='widgetSmTitle'>New Join Members</span>
			<ul className='widgetSmList'>
				<li className='widgetSmListItem'>
					<img className='widgetSmImg' src={imgUrl} alt='' />
					<div className='widgetSmUser'>
						<span className='widgetSmUserName'>Neharika Mahapatra</span>
						<span className='widgetSmUserTitle'>Sales Executive</span>
					</div>
					<button className='widgetSmButton'>
						<Visibility className='widgetSmIcon' />
						Display
					</button>
				</li>
				<li className='widgetSmListItem'>
					<img className='widgetSmImg' src={imgUrl} alt='' />
					<div className='widgetSmUser'>
						<span className='widgetSmUserName'>Neharika Mahapatra</span>
						<span className='widgetSmUserTitle'>Sales Executive</span>
					</div>
					<button className='widgetSmButton'>
						<Visibility />
						Display
					</button>
				</li>
				<li className='widgetSmListItem'>
					<img className='widgetSmImg' src={imgUrl} alt='' />
					<div className='widgetSmUser'>
						<span className='widgetSmUserName'>Neharika Mahapatra</span>
						<span className='widgetSmUserTitle'>Sales Executive</span>
					</div>
					<button className='widgetSmButton'>
						<Visibility />
						Display
					</button>
				</li>
				<li className='widgetSmListItem'>
					<img className='widgetSmImg' src={imgUrl} alt='' />
					<div className='widgetSmUser'>
						<span className='widgetSmUserName'>Neharika Mahapatra</span>
						<span className='widgetSmUserTitle'>Sales Executive</span>
					</div>
					<button className='widgetSmButton'>
						<Visibility />
						Display
					</button>
				</li>
				<li className='widgetSmListItem'>
					<img className='widgetSmImg' src={imgUrl} alt='' />
					<div className='widgetSmUser'>
						<span className='widgetSmUserName'>Neharika Mahapatra</span>
						<span className='widgetSmUserTitle'>Sales Executive</span>
					</div>
					<button className='widgetSmButton'>
						<Visibility />
						Display
					</button>
				</li>
			</ul>
		</div>
	);
}

export default WidgetSm;

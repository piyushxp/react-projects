import React from "react";
import "./widget.scss";

function WidgetLg() {
	const imgUrl =
		"https://images.pexels.com/photos/1987042/pexels-photo-1987042.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

	const Button = ({ type }) => (
		<button className={"widgetLgButton " + type}>{type}</button>
	);

	return (
		<div className='widgetLg'>
			<h3 className='widgetLgTitle'>Latest Transactions</h3>

			<table className='widgetLgTable'>
				<tr className='widgetLgTr'>
					<th className='widgetLgTh'>Customer</th>
					<th className='widgetLgTh'>Date</th>
					<th className='widgetLgTh'>Amount</th>
					<th className='widgetLgTh'>Status</th>
				</tr>
				<tr className='widgetLgTr'>
					<td className='widgetLgUser'>
						<img src={imgUrl} alt='' className='widgetLgImg' />
						<span className='widgetLgName'>Neharika</span>
					</td>
					<td className='widgetLgDate'>24th Apr 2021</td>
					<td className='widgetLgAmount'>$ 235 </td>
					<td className='widgetLgStatus'>
						<Button type='Approved' />
					</td>
				</tr>

				<tr className='widgetLgTr'>
					<td className='widgetLgUser'>
						<img src={imgUrl} alt='' className='widgetLgImg' />
						<span className='widgetLgName'>Neharika</span>
					</td>
					<td className='widgetLgDate'>24th Apr 2021</td>
					<td className='widgetLgAmount'>$ 235 </td>
					<td className='widgetLgStatus'>
						<Button type='Pending' />
					</td>
				</tr>

				<tr className='widgetLgTr'>
					<td className='widgetLgUser'>
						<img src={imgUrl} alt='' className='widgetLgImg' />
						<span className='widgetLgName'>Neharika</span>
					</td>
					<td className='widgetLgDate'>24th Apr 2021</td>
					<td className='widgetLgAmount'>$ 235 </td>
					<td className='widgetLgStatus'>
						<Button type='Declined' />
					</td>
				</tr>

				<tr className='widgetLgTr'>
					<td className='widgetLgUser'>
						<img src={imgUrl} alt='' className='widgetLgImg' />
						<span className='widgetLgName'>Neharika</span>
					</td>
					<td className='widgetLgDate'>24th Apr 2021</td>
					<td className='widgetLgAmount'>$ 235 </td>
					<td className='widgetLgStatus'>
						<Button type='Pending' />
					</td>
				</tr>
			</table>
		</div>
	);
}

export default WidgetLg;

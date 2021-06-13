import React from "react";
import "./userlist.scss";
import { DataGrid } from "@material-ui/data-grid";
import DeleteIcon from "@material-ui/icons/Delete";
import { rowData } from "../../data/data";
import { Link } from "react-router-dom";

function UserList() {
	const [data, setData] = React.useState(rowData);

	const handleDelete = (id) => {
		let isConfirm = window.confirm();
		if (!isConfirm) {
			return;
		}
		setData(data.filter((item) => item.id !== id));
	};

	const columns = [
		{ field: "id", headerName: "ID", width: 90 },
		{
			field: "username",
			headerName: "User",
			width: 200,
			renderCell: (params) => {
				return (
					<div className='userListUser'>
						<img className='userListImg' src={params.row.avatar} alt='' />
						{params.row.username}
					</div>
				);
			},
		},
		{ field: "email", headerName: "Email", width: 200 },
		{
			field: "status",
			headerName: "Status",
			width: 200,
		},
		{
			field: "transaction",
			headerName: "Transaction",
			width: 150,
		},

		{
			field: "actrion ",
			headerName: "Action",
			width: 150,
			renderCell: (params) => {
				return (
					<>
						<Link to={`/user/${params.row.id}`}>
							<button className='userListEdit'>Edit</button>
						</Link>
						<DeleteIcon
							className='userListDelete'
							onClick={() => handleDelete(params.row.id)}
						/>
					</>
				);
			},
		},
	];

	return (
		<div className='userList'>
			<DataGrid
				disableSelectionOnClick
				rows={data}
				columns={columns}
				pageSize={10}
				checkboxSelection
			/>
		</div>
	);
}

export default UserList;

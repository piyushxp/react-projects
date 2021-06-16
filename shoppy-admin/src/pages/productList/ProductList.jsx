import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";
import { ProductData } from "../../data/data";
import "./productlist.scss";

function ProductList() {
	const [data, setData] = React.useState(ProductData);

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
			field: "product",
			headerName: "Product",
			width: 200,
			renderCell: (params) => {
				return (
					<div className='productListImgWrapper'>
						<img className='productListImg' src={params.row.image} alt='' />
						<span>{params.row.username}</span>
					</div>
				);
			},
		},
		{ field: "stock", headerName: "Stock", width: 200 },
		{
			field: "status",
			headerName: "Status",
			width: 200,
		},
		{
			field: "price",
			headerName: "Price",
			width: 150,
		},

		{
			field: "action ",
			headerName: "Action",
			width: 150,
			renderCell: (params) => {
				return (
					<>
						<Link to={`/product/${params.row.id}`}>
							<button className='productListEdit'>Edit</button>
						</Link>
						<DeleteIcon
							className='productListDelete'
							onClick={() => handleDelete(params.row.id)}
						/>
					</>
				);
			},
		},
	];

	return (
		<div className='productList'>
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

export default ProductList;

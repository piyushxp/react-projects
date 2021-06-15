import React from "react";
import "./newuser.scss";

export default function NewUser() {
	return (
		<div className='newUser'>
			<h1 className='newUserTitle'>New User</h1>
			<form className='newUserForm'>
				<div className='newUserItem'>
					<label htmlFor='username'>Username</label>
					<input type='text' name='username' id='username' />
				</div>

				<div className='newUserItem'>
					<label htmlFor='username'>FullName</label>
					<input type='text' name='fullName' id='fullName' />
				</div>

				<div className='newUserItem'>
					<label htmlFor='username'>Email</label>
					<input type='text' name='email' id='email' />
				</div>

				<div className='newUserItem'>
					<label htmlFor='username'>Password</label>
					<input type='password' name='password' id='password' />
				</div>

				<div className='newUserItem'>
					<label htmlFor='username'>Phone</label>
					<input type='number' name='phone' id='phone' />
				</div>

				<div className='newUserItem'>
					<label htmlFor='username'>Address</label>
					<input type='text' name='address' id='address' />
				</div>

				<div className='newUserItem'>
					<label>Gender</label>
					<div className='newUserGender'>
						<input type='radio' name='gender' id='male' value='male' />
						<label htmlFor='male'>Male</label>
						<input type='radio' name='gender' id='female' value='female' />
						<label htmlFor='female'>Female</label>
					</div>
				</div>

				<div className='newUserItem'>
					<label htmlFor='active'>Active</label>
					<select name='active' id='active' className='newUserSelect'>
						<option value='yes'>Yes</option>
						<option value='no'>No</option>
					</select>
				</div>
			</form>
			<button className='newUserButton'>Create</button>
		</div>
	);
}

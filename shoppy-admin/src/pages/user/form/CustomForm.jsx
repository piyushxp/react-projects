import React from "react";
import { useForm } from "react-hook-form";
import "./customform.scss";
import PublishIcon from "@material-ui/icons/Publish";

export default function CustomForm() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);

	return (
		/* "handleSubmit" will validate your inputs before invoking "onSubmit" */
		<form className='userUpdateForm' onSubmit={handleSubmit(onSubmit)}>
			{/* register your input into the hook by invoking the "register" function */}
			<div className='userUpdateLeft'>
				<div className='userUpdateItem'>
					<label htmlFor=''>Username</label>
					<input
						type='text'
						placeholder='piyush'
						name='username'
						className='userUpdateInput'
						{...register("username")}
					/>
				</div>

				<div className='userUpdateItem'>
					<label htmlFor=''>Fullname</label>
					<input
						type='text'
						placeholder='piyush'
						name='fullName'
						className='userUpdateInput'
						{...register("fullName", { required: true, maxLength: 20 })}
					/>
					{errors.fullName && (
						<span className='errors'>
							The characters should not exceeds 10 digits
						</span>
					)}
				</div>

				<div className='userUpdateItem'>
					<label htmlFor=''>Email</label>
					<input
						type='text'
						name='email'
						placeholder='piyush@mail'
						className='userUpdateInput'
						{...register("email")}
					/>
				</div>

				<div className='userUpdateItem'>
					<label htmlFor=''>Phone</label>
					<input
						type='text'
						placeholder='909090909'
						className='userUpdateInput'
						{...register("phone")}
						name='phone'
					/>
					{errors.exampleRequired && <span>This field is required</span>}
				</div>

				<div className='userUpdateItem'>
					<label htmlFor=''>Address</label>
					<input
						type='text'
						placeholder='piyush'
						className='userUpdateInput'
						{...register("address")}
						name='address'
					/>
				</div>
			</div>
			<div className='userUpdateRight'>
				<div className='userUpdateUpload'>
					<img
						src='https://images.pexels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
						alt=''
						className='userUpdateImg'
					/>
					<label htmlFor='file'>
						<PublishIcon className='userUpdat' />
					</label>
					<input type='file' name='' id='file' style={{ display: "none" }} />
				</div>
				<input type='submit' className='userUpdateButton' name='update' />
			</div>
		</form>
	);
}

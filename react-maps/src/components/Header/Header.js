import { Autocomplete } from "@react-google-maps/api";
import React from "react";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./styles";

const Header = () => {
	const classes = useStyles();
	return (
		<>
			<AppBar position='static'>
				<Toolbar className={classes.toolbar}>
					<Typography variant='h5'>Travelo</Typography>
					<Box display='flex'>
						<Typography>Explore and Bookmark</Typography>
						<Autocomplete>
							<div className={classes.search}>
								<div className={classes.searchIcon}>
									<SearchIcon />
								</div>
							</div>
						</Autocomplete>
					</Box>
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Header;

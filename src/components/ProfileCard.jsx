import React from 'react';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, Button, Typography } from '@mui/material';
import { red } from '@mui/material/colors';

// Profile/product card showing image, title, description, and actions
export default function ProfileCard() {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardHeader
				avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="profile">J</Avatar>}
				title="Jane Doe"
				subheader="Product Manager"
			/>
			<CardMedia
				component="img"
				height="180"
				image="https://picsum.photos/600/400"
				alt="Profile"
			/>
			<CardContent>
				<Typography variant="body2" color="text.secondary">
					Focused on building delightful customer experiences across web and mobile.
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small" variant="contained" color="primary">Message</Button>
				<Button size="small" variant="outlined" color="secondary">Follow</Button>
			</CardActions>
		</Card>
	);
}



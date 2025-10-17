import React from 'react';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Divider } from '@mui/material';

// List of items with avatar + primary/secondary text
export default function ListWithAvatars() {
	const items = [
		{ id: 1, name: 'Jose Manalo', role: 'Designer' },
		{ id: 2, name: 'Julius Caesar', role: 'Engineer' },
		{ id: 3, name: 'Mark De Guzman', role: 'Analyst' }
	];

	return (
		<List sx={{ width: '100%', maxWidth: 420, bgcolor: 'background.paper' }}>
			{items.map((item, idx) => (
				<React.Fragment key={item.id}>
					<ListItem>
						<ListItemAvatar>
							<Avatar>{item.name.charAt(0)}</Avatar>
						</ListItemAvatar>
						<ListItemText primary={item.name} secondary={item.role} />
					</ListItem>
					{idx < items.length - 1 && <Divider component="li" />}
				</React.Fragment>
			))}
		</List>
	);
}



import React from 'react';
import { Badge, Avatar, Stack } from '@mui/material';

// Avatar with a badge count to show unread notifications/messages
export default function AvatarWithBadge() {
	return (
		<Stack direction="row" spacing={2}>
			<Badge color="secondary" badgeContent={7}>
				<Avatar alt="Jane Doe" src="https://i.pravatar.cc/100?img=5" />
			</Badge>
		</Stack>
	);
}



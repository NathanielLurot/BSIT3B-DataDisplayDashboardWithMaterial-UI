import React from 'react';
import { Container, Grid, Typography, Stack } from '@mui/material';
import ProfileCard from './components/ProfileCard.jsx';
import ListWithAvatars from './components/ListWithAvatars.jsx';
import AvatarWithBadge from './components/AvatarWithBadge.jsx';
import DataTable from './components/DataTable.jsx';
import FAQAccordion from './components/FAQAccordion.jsx';

// Organize components inside a container with headings for each section
export default function App() {
	return (
		<Container sx={{ py: 4 }}>
			<Typography variant="h4" gutterBottom>Data Display Dashboard</Typography>

			<Stack spacing={4}>
				<section>
					<Typography variant="h5" gutterBottom>Profile Card</Typography>
					<ProfileCard />
				</section>

				<section>
					<Typography variant="h5" gutterBottom>List with Avatars</Typography>
					<ListWithAvatars />
				</section>

				<section>
					<Typography variant="h5" gutterBottom>Avatar with Badge</Typography>
					<AvatarWithBadge />
				</section>

				<section>
					<Typography variant="h5" gutterBottom>Users Table</Typography>
					<DataTable />
				</section>

				<section>
					<Typography variant="h5" gutterBottom>FAQs</Typography>
					<FAQAccordion />
				</section>
			</Stack>

			{/*
				Reflection (5–7 sentences):
				The AvatarWithBadge component was the easiest to implement due to its simple API - just wrapping an Avatar with a Badge component and specifying the badge content. The DataTable component was the most challenging because it required configuring multiple complex features like pagination, sorting, and column definitions, making it more prone to configuration errors and requiring deeper understanding of the DataGrid API. These components significantly enhance real-world applications by improving information hierarchy and user interaction patterns. The ProfileCard provides a clean, scannable way to present user information with clear action buttons, reducing cognitive load when browsing profiles or team members. The ListWithAvatars component aids quick user recognition through visual avatars while maintaining compact information density. The AvatarWithBadge offers immediate notification context without requiring navigation, helping users prioritize their attention. Together, these patterns create intuitive interfaces that help users process information faster and take actions more efficiently.
			*/}
		</Container>
	);
}



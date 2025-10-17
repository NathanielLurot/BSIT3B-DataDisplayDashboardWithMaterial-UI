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
				- The easiest component was the List because its API is straightforward.
				- The hardest was the DataGrid due to configuring sorting and pagination.
				- Cards present concise overviews and clear actions, improving scannability.
				- Badges provide quick notification context without navigating away.
				- Avatars aid recognition and reduce cognitive load in user lists.
				- Accordions help keep content dense yet accessible, reducing page clutter.
				- Together, these patterns enhance usability and help users act faster.
			*/}
		</Container>
	);
}



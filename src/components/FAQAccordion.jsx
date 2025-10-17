import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Simple accordion for FAQs or details sections
export default function FAQAccordion() {
	return (
		<div>
			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography>What is this dashboard for?</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						It demonstrates common data display components using Material-UI in React.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography>Can I sort and paginate the table?</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Yes, the table supports sorting by column headers and page size selection.
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}



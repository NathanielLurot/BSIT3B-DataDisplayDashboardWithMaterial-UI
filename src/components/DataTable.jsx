import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';

// Sortable, paginated table listing users with name and role columns
export default function DataTable() {
	const rows = [
		{ id: 1, name: 'Jose Manalo', role: 'Designer' },
		{ id: 2, name: 'Julius Caesar', role: 'Engineer' },
		{ id: 3, name: 'Carla Ruiz', role: 'Analyst' },
		{ id: 4, name: 'Paul Lebron', role: 'Engineer' },
		{ id: 5, name: 'Ella Kim', role: 'Manager' },
		{ id: 6, name: 'Frank Ramos', role: 'Analyst' },
		{ id: 7, name: 'Grace Lee', role: 'Designer' },
		{ id: 8, name: 'Harold Mabin', role: 'Engineer' }
	];

	const columns = [
		{ field: 'name', headerName: 'Name', flex: 1, sortable: true },
		{ field: 'role', headerName: 'Role', flex: 1, sortable: true }
	];

	return (
		<Box sx={{ height: 380, width: '100%' }}>
			<DataGrid
				rows={rows}
				columns={columns}
				initialState={{
					pagination: { paginationModel: { page: 0, pageSize: 5 } },
					sorting: { sortModel: [{ field: 'name', sort: 'asc' }] }
				}}
				pageSizeOptions={[5, 10]}
				disableRowSelectionOnClick
			/>
		</Box>
	);
}



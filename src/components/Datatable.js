import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function DataTable({data}) {

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden', maxWidth: 400 }}>
        <TableContainer sx={{maxHeight: "50vh"}}>
            <Table stickyHeader aria-label="simple table" size="small">
            <TableHead>
              <TableRow>
                <TableCell component="th">Pool Name</TableCell>
                <TableCell component="th">IP address</TableCell>
                <TableCell component="th">CO2</TableCell>
                <TableCell component="th">Address</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                {
                    data.map( (d,index) => (
                        <TableRow key={index}>
                            <TableCell>{d.pool_name}</TableCell>
                            <TableCell>{d.ip_address}</TableCell>
                            <TableCell>{d.carbon_emissions_factors}</TableCell>
                            <TableCell>{d.locations}</TableCell>
                        </TableRow>
                    )) // whitespace-nowrap
                }
            </TableBody>
          </Table>
        </TableContainer>
        </Paper>
    )
}
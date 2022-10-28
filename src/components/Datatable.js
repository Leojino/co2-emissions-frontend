import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function DataTable({data}) {

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden'}}>
        <TableContainer sx={{maxHeight: "50vh"}}>
            <Table stickyHeader aria-label="simple table" size="small">
            <TableHead>
              <TableRow>
                <TableCell component="th">Pool</TableCell>
                <TableCell component="th">Location</TableCell>
                <TableCell component="th">CO2</TableCell>
                <TableCell component="th">Electricity consumption</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                {
                    data != null && data.map( (d,index) => (
                        <TableRow key={index}>
                            <TableCell>{d.Pools}</TableCell>
                            <TableCell>{d.Locations}</TableCell>
                            <TableCell>{d.CO2_emissions}</TableCell>
                            <TableCell>{d.electricity_consumption_per_region}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
          </Table>
        </TableContainer>
        </Paper>
    )
}
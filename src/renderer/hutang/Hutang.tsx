import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';

export default function Hutang() {
  return (
    <Box
      sx={{
        p: 2,
        border: '1px solid grey',
        overflow: 'auto',
      }}
      height={440}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography>Nama</Typography>
            </TableCell>

            <TableCell>
              <Typography>Instansi</Typography>
            </TableCell>

            <TableCell>
              <Typography>Tanggal</Typography>
            </TableCell>

            <TableCell>
              <Typography>Total</Typography>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow>
            <TableCell>
              <Typography>Nama</Typography>
            </TableCell>

            <TableCell>
              <Typography>Instansi</Typography>
            </TableCell>

            <TableCell>
              <Typography>Tanggal</Typography>
            </TableCell>

            <TableCell>
              <Typography>Total</Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
}

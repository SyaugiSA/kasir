import { ArrowForwardIos, Search } from '@mui/icons-material';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  Typography,
  TextField,
  TableRow,
} from '@mui/material';
import { Link } from 'react-router-dom';

export default function History() {
  return (
    <Box display="flex" justifyContent="space-around" flexDirection="column">
      <Box>
        <TextField label={<Search />} name="cari" />
      </Box>

      <Box
        marginTop={1}
        height={380}
        sx={{ p: 2, border: '1px solid grey', overflow: 'auto' }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography>ID</Typography>
              </TableCell>

              <TableCell>
                <Typography>Nama Barang</Typography>
              </TableCell>

              <TableCell>
                <Typography>Total</Typography>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>
                <Link to="/history/1">
                  <Typography>ABC0000002</Typography>
                </Link>
              </TableCell>

              <TableCell>
                <Link to="/history/1">
                  <Typography>Extrana NYM 2x1,5 ecer</Typography>
                </Link>
              </TableCell>

              <TableCell>
                <Link to="/history/1">
                  <Typography>Rp 350000</Typography>
                </Link>
              </TableCell>

              <TableCell>
                <Link to="/history/1">
                  <Box display="flex" justifyContent="space-around">
                    <ArrowForwardIos color="disabled" />
                  </Box>
                </Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
}

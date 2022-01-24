import { ArrowForwardIos, Search } from '@mui/icons-material';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TextField,
} from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

export default function Piutang() {
  return (
    <Box>
      <Box>
        <TextField label={<Search />} name="cari" />
      </Box>

      <Box
        marginTop={1}
        height={380}
        sx={{
          p: 2,
          border: '1px solid grey',
          overflow: 'auto',
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography>ID</Typography>
              </TableCell>

              <TableCell>
                <Typography>Nama</Typography>
              </TableCell>

              <TableCell>
                <Typography>Total</Typography>
              </TableCell>

              <TableCell>
                <Typography>Catatan</Typography>
              </TableCell>

              <TableCell>
                <Typography>Status</Typography>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>
                <Link to="/piutang/1">
                  <Typography>ID</Typography>
                </Link>
              </TableCell>

              <TableCell>
                <Link to="/piutang/1">
                  <Typography>Nama</Typography>
                </Link>
              </TableCell>

              <TableCell>
                <Link to="/piutang/1">
                  <Typography>Total</Typography>
                </Link>
              </TableCell>

              <TableCell>
                <Link to="/piutang/1">
                  <Typography>Catatan</Typography>
                </Link>
              </TableCell>

              <TableCell>
                <Link to="/piutang/1">
                  <Typography>Lunas</Typography>
                </Link>
              </TableCell>

              <TableCell>
                <Link to="/piutang/1">
                  <ArrowForwardIos color="disabled" />
                </Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
}

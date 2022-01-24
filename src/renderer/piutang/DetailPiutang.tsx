import { ArrowBackIosNew } from '@mui/icons-material';
import {
  IconButton,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { Box } from '@mui/system';
import { Link, useParams } from 'react-router-dom';

export default function DetailPiutang() {
  const { id } = useParams();

  return (
    <Box>
      <Box display="flex" flexDirection="column" justifyContent="space-around">
        <Box display="flex" justifyContent="space-between">
          <Link to="/piutang">
            <IconButton>
              <ArrowBackIosNew />
            </IconButton>
          </Link>

          <Typography variant="h5" component="div">
            {id}
          </Typography>
        </Box>

        <Box
          marginTop={1}
          height={350}
          sx={{ p: 2, border: '1px solid grey', overflow: 'auto' }}
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
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </Box>
    </Box>
  );
}

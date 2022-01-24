import { ArrowBackIosNew } from '@mui/icons-material';
import {
  Box,
  Button,
  IconButton,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  Typography,
} from '@mui/material';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

export default function Histories() {
  const { id } = useParams();
  return (
    <Box>
      <Box display="flex" flexDirection="column" justifyContent="space-around">
        <Box display="flex" justifyContent="space-between">
          <Link to="/history">
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
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box height={283} sx={{ overflow: 'auto' }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Typography>Kode</Typography>
                    </TableCell>

                    <TableCell>
                      <Typography>Nama</Typography>
                    </TableCell>

                    <TableCell>
                      <Typography>Harga</Typography>
                    </TableCell>

                    <TableCell>
                      <Typography>Jumlah</Typography>
                    </TableCell>

                    <TableCell>
                      <Typography>Sub Total</Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Typography>ABC0000002</Typography>
                    </TableCell>

                    <TableCell>
                      <Typography>Extrana NYM 2x1,5 ecer</Typography>
                    </TableCell>

                    <TableCell>
                      <Typography>Rp 350000</Typography>
                    </TableCell>

                    <TableCell>
                      <Typography>1</Typography>
                    </TableCell>

                    <TableCell>
                      <Typography>Rp 350000</Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>

            <Box
              display="flex"
              justifyContent="space-between"
              marginRight={10}
              marginLeft={2}
              marginTop={1}
            >
              <Typography>Total</Typography>
              <Typography>Rp 100000</Typography>
            </Box>
          </Box>
        </Box>

        <center>
          <Box marginTop={1}>
            <Button
              variant="outlined"
              style={{ color: '#43a047' }}
              onClick={() => window.print()}
            >
              Cetak
            </Button>
          </Box>
        </center>
      </Box>
    </Box>
  );
}

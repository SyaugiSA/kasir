import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import Logo from './logo.png';

export default function Home() {
  return (
    <Box display="flex" flexDirection="column">
      <center>
        <Box>
          <img src={Logo} alt="Toko Listrik Amanah" width={100} />
        </Box>

        <Box display="flex" justifyContent="space-around" marginTop={2}>
          <Box
            height={270}
            width={350}
            sx={{ p: 2, border: '3px solid yellow', overflow: 'auto' }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell colSpan={2}>
                    <Typography>
                      <center>Barang Sedikit</center>
                    </Typography>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <Typography>Nama</Typography>
                  </TableCell>

                  <TableCell>
                    <Typography>Stok</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                <TableRow>
                  <TableCell>
                    <Typography>ABC Batery A2 ecer</Typography>
                  </TableCell>

                  <TableCell>
                    <Typography>2</Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>

          <Box
            height={270}
            width={350}
            sx={{ p: 2, border: '3px solid red', overflow: 'auto' }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <center>
                      <Typography>Barang Habis</Typography>
                    </center>
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                <TableRow>
                  <TableCell>
                    <Typography>ABC Batery A3</Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
      </center>
    </Box>
  );
}

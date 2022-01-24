import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TextField,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';

export default function Kasir() {
  interface Idafbar {
    id: string;
    nama: string;
    harga: number;
    jml: number;
    subtotal: number;
  }

  const dafbar: Idafbar[] = [{ id: '121', jml: 12 }];

  const reset = () => {
    dafbar.splice(0, dafbar.length);
    console.log(dafbar);
  };

  return (
    <Box display="flex" justifyContent="space-around">
      <Box marginTop={10}>
        <Box sx={{ p: 2, border: '1px solid grey' }}>
          <form>
            <TextField
              id="id"
              name="id"
              label="Barcode / Kode Barang"
              autoFocus
            />
            <br /> <br />
            <TextField id="jml" name="jml" type="number" label="Jumlah" />
            <br /> <br />
            <Box display="flex" justifyContent="space-around">
              <Button
                variant="outlined"
                onClick={() => {
                  let id = document.getElementById('id').value;
                  let jml = document.getElementById('jml').value;
                  dafbar.push({ id, jml });
                  console.log(dafbar);
                }}
              >
                Tambah
              </Button>
              <Button
                type="reset"
                variant="outlined"
                style={{ color: '#d81b60' }}
              >
                Reset
              </Button>
            </Box>
          </form>
        </Box>
      </Box>

      <Box>
        <Box
          sx={{
            width: 500,
            height: 390,
            p: 2,
            border: '1px solid grey',
            overflow: 'auto',
          }}
        >
          <Box height={310} sx={{ overflow: 'auto' }}>
            <Table>
              <TableHead>
                <TableCell>id</TableCell>
                <TableCell>nama</TableCell>
                <TableCell>harga</TableCell>
                <TableCell>jumlah</TableCell>
                <TableCell>sub total</TableCell>
              </TableHead>

              {dafbar.map((val, index) => {
                <TableBody key={index}>
                  <TableCell>{val.id}</TableCell>
                  <TableCell>{val.id}</TableCell>
                  <TableCell>{val.id}</TableCell>
                  <TableCell>{val.id}</TableCell>
                  <TableCell>{val.id}</TableCell>
                </TableBody>;
              })}
            </Table>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography>Total</Typography>
            <Typography>Rp 100000</Typography>
          </Box>
        </Box>
        <br />
        <Box display="flex" justifyContent="space-evenly">
          <Button
            variant="outlined"
            style={{ color: '#43a047' }}
            onClick={() => window.print()}
          >
            Cetak
          </Button>
          <Button variant="outlined">Simpan</Button>
          <Button
            variant="outlined"
            type="reset"
            style={{ color: '#d81b60' }}
            onClick={reset}
          >
            Batal
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

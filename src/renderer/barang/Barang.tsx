import {
  AddCircleOutline,
  Delete,
  Mode,
  Search,
  Close,
} from '@mui/icons-material';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  Typography,
  TextField,
  IconButton,
  Modal,
  Button,
} from '@mui/material';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '450px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Barang() {
  const [add, setAdd] = useState(false);
  const addOpen = () => setAdd(true);
  const addClose = () => setAdd(false);

  const [edit, setEdit] = useState(false);
  const editOpen = () => setEdit(true);
  const editClose = () => setEdit(false);

  const [del, setDel] = useState(false);
  const delOpen = () => setDel(true);
  const delClose = () => setDel(false);

  return (
    <Box display="flex" justifyContent="space-around" flexDirection="column">
      <Box display="flex" justifyContent="space-between">
        <Box>
          <TextField label={<Search />} name="cari" />
        </Box>
        <Box>
          <IconButton
            aria-label="Tambah"
            style={{ color: '#03a9f4' }}
            onClick={addOpen}
          >
            <AddCircleOutline />
          </IconButton>
        </Box>
      </Box>

      <Box
        position="relative"
        top={10}
        height={360}
        sx={{ p: 2, border: '1px solid grey', overflow: 'auto' }}
      >
        <Table>
          <TableHead>
            <TableCell width={200}>
              <Typography>Kode</Typography>
            </TableCell>

            <TableCell width={300}>
              <Typography>Nama</Typography>
            </TableCell>

            <TableCell width={100}>
              <Typography>Stok</Typography>
            </TableCell>

            <TableCell width={200}>
              <Typography>Harga</Typography>
            </TableCell>

            <TableCell width={100}>
              <Typography>Action</Typography>
            </TableCell>
          </TableHead>

          <TableBody>
            <TableCell>
              <Typography>ABC0000002</Typography>
            </TableCell>

            <TableCell>
              <Typography>Extrana NYM 2x1,5 ecer</Typography>
            </TableCell>

            <TableCell>
              <Typography>18</Typography>
            </TableCell>

            <TableCell>
              <Typography>Rp 350000</Typography>
            </TableCell>

            <TableCell>
              <Box display="flex" justifyContent="space-around">
                <IconButton
                  aria-label="Ubah"
                  style={{ color: '#cddc39' }}
                  onClick={editOpen}
                >
                  <Mode />
                </IconButton>
                <IconButton
                  aria-label="Hapus"
                  style={{ color: '#d81b60' }}
                  onClick={delOpen}
                >
                  <Delete />
                </IconButton>
              </Box>
            </TableCell>
          </TableBody>
        </Table>
      </Box>

      <Modal open={add} onClose={addClose}>
        <Box sx={style}>
          <Box display="flex" justifyContent="space-between">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Tambah Barang
            </Typography>

            <Box onClick={addClose}>
              <Close fontSize="large" />
            </Box>
          </Box>

          <center>
            <Box marginTop={2}>
              <TextField label="Kode" autoFocus />
              <br />
              <TextField label="Nama" />
              <br />
              <TextField label="Stok" type="number" />
              <br />
              <TextField label="Ambil" type="number" />
              <br />
              <TextField label="Persentase" type="number" />
              <br />
              <TextField label="Jual" type="number" />
              <br />
              <Button variant="outlined">Tambah</Button>
            </Box>
          </center>
        </Box>
      </Modal>

      <Modal open={edit} onClose={editClose}>
        <Box sx={style}>
          <Box display="flex" justifyContent="space-between">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Ubah Barang
            </Typography>

            <Box onClick={editClose}>
              <Close fontSize="large" />
            </Box>
          </Box>

          <center>
            <Box marginTop={2}>
              <TextField label="Kode" autoFocus />
              <br />
              <TextField label="Nama" />
              <br />
              <TextField label="Stok" type="number" />
              <br />
              <TextField label="Ambil" type="number" />
              <br />
              <TextField label="Persentase" type="number" />
              <br />
              <TextField label="Jual" type="number" />
              <br />
              <Button variant="outlined">Simpan</Button>
            </Box>
          </center>
        </Box>
      </Modal>

      <Modal open={del}>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Hapus Barang
          </Typography>

          <Box marginTop={2}>
            <Typography>
              Apakah Anda Yakin Ingin Menghapus Barang Ini?
            </Typography>
          </Box>

          <Box display="flex" justifyContent="space-around" marginTop={2}>
            <Button variant="outlined" style={{ color: '#d81b60' }}>
              Hapus
            </Button>
            <Button variant="outlined" onClick={delClose}>
              Batal
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

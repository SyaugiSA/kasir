import './App.css';
import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';
import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {
  AccessTime,
  AccountCircle,
  CottageOutlined,
  CreditCard,
  Extension,
  LocalGroceryStoreOutlined,
  MoneyOff,
  Receipt,
} from '@mui/icons-material';
import Dating from './Date/Date';
import Kasir from './kasir/Kasir';
import Barang from './barang/Barang';
import Histories from './history/Histories';
import History from './history/History';
import Home from './home/Home';
import Piutang from './piutang/Piutang';
import DetailPiutang from './piutang/DetailPiutang';
import Hutang from './hutang/Hutang';
import Pengeluaran from './pengeluaran/Pengeluaran';
import Admin from './admin/Admin';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export default function App() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Router>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Toko Listruk Amanah
            </Typography>

            <Typography variant="h6" component="div">
              <Dating />
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            <Link to="/">
              <ListItem button key="Home">
                <ListItemIcon>
                  <CottageOutlined />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
            </Link>

            <Link to="/kasir">
              <ListItem button key="Kasir">
                <ListItemIcon>
                  <LocalGroceryStoreOutlined />
                </ListItemIcon>
                <ListItemText primary="Kasir" />
              </ListItem>
            </Link>

            <Link to="/barang">
              <ListItem button key="Barang">
                <ListItemIcon>
                  <Extension />
                </ListItemIcon>
                <ListItemText primary="Barang" />
              </ListItem>
            </Link>

            <Link to="/history">
              <ListItem button key="History">
                <ListItemIcon>
                  <AccessTime />
                </ListItemIcon>
                <ListItemText primary="History" />
              </ListItem>
            </Link>

            <Link to="/piutang">
              <ListItem button key="Piutang">
                <ListItemIcon>
                  <CreditCard />
                </ListItemIcon>
                <ListItemText primary="Piutang" />
              </ListItem>
            </Link>

            <Link to="/hutang">
              <ListItem button key="Hutang">
                <ListItemIcon>
                  <Receipt />
                </ListItemIcon>
                <ListItemText primary="Hutang" />
              </ListItem>
            </Link>

            <Link to="/cost">
              <ListItem button key="Pengeluaran">
                <ListItemIcon>
                  <MoneyOff />
                </ListItemIcon>
                <ListItemText primary="Pengeluaran" />
              </ListItem>
            </Link>

            <Link to="/admin">
              <ListItem button key="Admin">
                <ListItemIcon>
                  <AccountCircle />
                </ListItemIcon>
                <ListItemText primary="Admin" />
              </ListItem>
            </Link>
          </List>
          <Divider />
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Routes>
            <Route path="/kasir" element={<Kasir />} />

            <Route path="/barang" element={<Barang />} />

            <Route path="/history/:id" element={<Histories />} />

            <Route path="/history" element={<History />} />

            <Route path="/piutang/:id" element={<DetailPiutang />} />

            <Route path="/piutang" element={<Piutang />} />

            <Route path="/hutang" element={<Hutang />} />

            <Route path="/cost" element={<Pengeluaran />} />

            <Route path="/admin" element={<Admin />} />

            <Route path="/" element={<Home />} />
          </Routes>
        </Box>
      </Router>
    </Box>
  );
}

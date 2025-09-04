
import './App.css';
import Navbar from './component/Navbar/Navbar';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { DarkTheme } from './component/Navbar/DarkTheme';
import Home from './component/Home/Home';

function App() {
  return (
    <ThemeProvider theme={DarkTheme}>
    <CssBaseline/>
        <Navbar />
        <Home />
    </ThemeProvider>
  );
}

export default App;

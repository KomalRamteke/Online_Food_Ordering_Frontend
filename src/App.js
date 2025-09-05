
import './App.css';
import Navbar from './component/Navbar/Navbar';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { DarkTheme } from './component/Navbar/DarkTheme';
import Home from './component/Home/Home';
import RestaurantDetail from './component/Restaurant/RestaurantDetail';
import Cart from './component/Cart/Cart';

function App() {
  return (
    <ThemeProvider theme={DarkTheme}>
    <CssBaseline/>
        <Navbar />
       <Home /> 
       <RestaurantDetail />
       <Cart />
    </ThemeProvider>
  );
}

export default App;

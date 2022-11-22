import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './Theme';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CompanyPage from './Pages/CompanyPage';
import DashBoard from './Pages/DashBoard';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} >
            <Route path="/" element={<DashBoard />} />
            <Route path="/login" element={<HomePage />} />
            <Route path="/signup" element={<HomePage />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/addShares" element={<CompanyPage />} />
            <Route path="/news" element={<HomePage />} />
            <Route path="/company/:symbol" element={<CompanyPage />} />
            <Route path="/portfolio" element={<HomePage />} />
            <Route path="/user/portfolio" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider >
  );
}

export default App;

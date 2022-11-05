import { ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './Theme';
import { Button } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Button variant="contained">hello</Button>
      </main>
    </ThemeProvider>
  );
}

export default App;

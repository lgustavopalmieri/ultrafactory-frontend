import { darkTheme } from '@/styles/theme/theme.config';
import {
  Container,
  CssBaseline,
  ThemeProvider,
} from '@mui/material';

import { SnackbarProvider } from 'notistack';
import Menu from './Menu';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<ILayoutProps> = ({ children }: ILayoutProps) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <SnackbarProvider
        autoHideDuration={2000}
        maxSnack={3}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
       <Menu />

        <Container maxWidth="lg" sx={{ color: 'white', my: 12 }}>
          {children}
        </Container>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default Layout;

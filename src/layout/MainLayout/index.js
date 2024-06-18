import { ThemeProvider } from '@mui/private-theming';
import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { Copyright } from 'src/components/pageStruct/copyright';
import { themeOptions } from 'src/theme/theme';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Toolbar } from '@mui/material';
import MainHeader from 'src/components/pageStruct/mainHeading';

// project imports

// ==============================|| MAIN LAYOUT ||============================== //

var newMaxWidth =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

const MainLayout = () => {
  const [newWidth, setNewWidth] = React.useState(newMaxWidth);
  React.useEffect(() => {
    function handleResize() {
      setNewWidth(
        window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth
      );
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize); // Asegúrate de limpiar el event listener
  }, []);

  return (
    <ThemeProvider theme={themeOptions}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          minHeight: '100svh',
          flexDirection: 'column',
          maxWidth: newWidth,
          margin: 'auto',
        }}>
        <Box
          component='main'
          sx={{ flex: '1 1 auto' }}>
          <MainHeader newWidth={newWidth} />
          <Toolbar />
          <Container sx={{ flex: '1 1 auto' }}>
            <Outlet context={[newWidth]} />
          </Container>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Copyright width={newWidth} />
        </Box>
      </Box>
      <div id='snack'></div>
    </ThemeProvider>
  );
};

export default MainLayout;

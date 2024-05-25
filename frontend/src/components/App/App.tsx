import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import About from '../About/About';
import QuotesPage from '../QuotesPage/QuotesPage.tsx';
import Header from '../Header/Header';
import { THEME } from '../../utils/theme';

const App = () => (
  <ThemeProvider theme={THEME}>
    <Header />
    <Routes>
      <Route path={'/about'} element={<About />} />
      <Route path={'/quotes'} element={<QuotesPage />} />
    </Routes>
  </ThemeProvider>
);

export default App;

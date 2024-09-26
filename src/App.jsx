import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import FirstPage from 'pages/FirstPage/FirstPage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import { Global } from '@emotion/react';
import { globalStyles } from './styles/globalStyles';
import { ContainerStyles } from './styles/Container';

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <ContainerStyles>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route path="/first" element={<FirstPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </ContainerStyles>
    </>
  );
}
export default App;

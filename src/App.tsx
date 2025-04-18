import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx';
import Header from './components/Header.tsx';
import Modal from 'react-modal';
import { Toaster } from 'react-hot-toast';
import PsychologistsPage from './pages/PsychologistsPage.tsx';
import { getBackgroundColor } from './helpers/getBackgroundColor.ts';
import PrivateRoute from './components/PrivateRoute.tsx';

Modal.setAppElement('#root');

function App() {
  const location = useLocation();
  const backgroundColor = getBackgroundColor(location.pathname);

  return (
    <>
      <div className={`min-h-screen ${backgroundColor}`}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="psychologists" element={<PsychologistsPage />} />
          <Route
            path="favorites"
            element={
              <PrivateRoute redirectTo="/">
                <PsychologistsPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
      <Toaster />
    </>
  );
}

export default App;

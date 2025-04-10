import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx';
import Header from './components/Header.tsx';
import Modal from 'react-modal';
import { Toaster } from 'react-hot-toast';

Modal.setAppElement('#root');

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

      <Toaster />
    </>
  );
}

export default App;

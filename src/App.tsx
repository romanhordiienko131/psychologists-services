import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx';
import Header from './components/Header.tsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;

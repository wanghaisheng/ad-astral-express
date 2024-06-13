import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Header } from './pages/Header';
import { Home } from './pages/Home';
// import { DesktopHeader } from './pages/DesktopHeader';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

import './App.css';
import { Route, Routes } from 'react-router-dom';
// import { Header } from './pages/Header';
import { Home } from './pages/Home';
import { DesktopHeader } from './pages/DesktopHeader';
import { Characters } from './pages/Characters';
import { CharacterDetails } from './pages/CharacterDetails';
import { Weapons } from './pages/Weapons';
import { WeaponDetails } from './pages/WeaponDetails';
import { FavoriteProvider } from './components/FavoriteContext';

export default function App() {
  return (
    <FavoriteProvider>
      <Routes>
        <Route path="/" element={<DesktopHeader />}>
          <Route index element={<Home />} />
          <Route path="characters" element={<Characters />} />
          <Route
            path="characters/:characterName"
            element={<CharacterDetails />}
          />
          <Route path="weapons" element={<Weapons />} />
          <Route path="weapons/:weaponName" element={<WeaponDetails />} />
        </Route>
      </Routes>
    </FavoriteProvider>
  );
}

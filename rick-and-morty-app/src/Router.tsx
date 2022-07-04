import { Route, Routes } from 'react-router-dom';

import Character from './pages/Character';
import Home from './pages/Home';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/character" element={<Character />} />
    </Routes>
  );
}

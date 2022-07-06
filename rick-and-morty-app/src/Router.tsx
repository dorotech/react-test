import { Route, Routes } from 'react-router-dom';

import Character from './pages/Character';
import Home from './pages/Home';

type RouterProps ={
  selectedTheme: string;
}

export default function Router({ selectedTheme }: RouterProps) {
  return (
    <Routes>
      <Route path="/" element={<Home selectedTheme={selectedTheme} />} />
      <Route path="/character/:id" element={<Character selectedTheme={selectedTheme} />} />
    </Routes>
  );
}

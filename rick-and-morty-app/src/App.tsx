import { BrowserRouter } from 'react-router-dom';

import Router from './Router';

import Header from './components/Header';

import './styles/global.scss';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  );
}

/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Maps from './pages/Maps';
import Dashboard from './pages/Dashboard';
import Statistik from './pages/Statistik';
import TanamanPangan from './dropdown/TanamanPangan';
import Holtikultura from './dropdown/Holtikultura';
import Perkebunan from './dropdown/Perkebunan';
import Petani from './dropdown/Petani';
import CurahHujan from './dropdown/CurahHujan';
import LahanPertanian from './dropdown/LahanPertanian';
import KelompokTani from './dropdown/KelompokTani';
import InputTanamanPangan from './utils/InputTanamanPangan';


function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path='/maps' element={<Maps />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/statistik' element={<Statistik />} />
        <Route path='/masterdata/tanaman-pangan' element={<TanamanPangan />} />
        <Route path='/masterdata/holtikultura' element={<Holtikultura />} />
        <Route path='/masterdata/perkebunan' element={<Perkebunan />} />
        <Route path='/masterdata/petani' element={<Petani/>}/>
        <Route path='/masterdata/curah-hujan' element={<CurahHujan />} />
        <Route path='/masterdata/lahan-pertanian' element={<LahanPertanian />} />
        <Route path='/masterdata/kelompok-tani' element={<KelompokTani />} />
        <Route path='/input-tanaman-pangan' element={<InputTanamanPangan/>} />
        <Route path='/' element={TanamanPangan}/>
        <Route path='/input-tanaman-pangan' render={() => <InputTanamanPangan onAddData={handleAddData} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
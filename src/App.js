import './App.css';
import { Navbar } from './components/Navbar';
import { Route,Routes } from 'react-router-dom';
import { Homepage } from './components/Homepage';
import { Settings } from './components/Settings';
import { Calculator } from './components/Calculator';
import { BuyCrypto } from './components/BuyCrypto';
import { SellCrypto } from './components/SellCrypto';
import { News } from './components/News';
import { SwapCalculator } from './components/SwapCalculator';
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='settings' element={<Settings/>}></Route>
        <Route path='calculator' element={<Calculator/>}></Route>
        <Route path='buycrypto' element={<BuyCrypto/>}></Route>
        <Route path='sellcrypto' element={<SellCrypto/>}></Route>
        <Route path='news' element={<News/>}></Route>
        <Route path='swapcalculator' element={<SwapCalculator/>}></Route>
      </Routes>
    </>
  );
}

export default App;

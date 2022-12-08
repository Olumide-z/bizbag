import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer, Navbar, Scroll } from './components';
import { Clients, Contact, Home, Pricing, Team } from './pages';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contact' element={<Contact />} />
        <Route path='/client' element={<Clients />}/>
        <Route path='/pricing' element={<Pricing/>} />
        <Route path='/team' element={<Team />} />
    </Routes>
    <Footer />
    <Scroll />
    </BrowserRouter>
  );
}

export default App;

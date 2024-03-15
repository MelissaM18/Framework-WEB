import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Inicio from './components/Inicio';
import ID from './components/ID';
import IDT from './components/IDT';
import SRIDT from './components/SRIDT';
import RIDT from './components/RIDT';
import IDU from './components/IDU';
import RIDU from './components/RIDU';
import SRIDU from './components/SRIDU';

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Inicio />}/>
          <Route path="/id" element={<ID />}/>
          <Route path="/idt" element={<IDT />}/>
          <Route path="/sridt" element={<SRIDT />}/>
          <Route path="/ridt" element={<RIDT />}/>
          <Route path="/idu" element={<IDU />}/>
          <Route path="/ridu" element={<RIDU />}/>
          <Route path="/sridu" element={<SRIDU />}/>
        </Routes>
      </div>
    </Router>
  );
};

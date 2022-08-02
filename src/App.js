import logo from './logo.svg';
import Page1 from './components/Page1/Page1';
import Page2 from './components/Page2/Page2';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

function App() {
  return (
    
    // <Page1/>
    <BrowserRouter>
       <Routes>
       <Route path="/" element={<Page1/>} />
       <Route path="/page2" element={<Page2/>} />
       <Route path="*" element={<h1 className='underline'>page not found</h1>} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;

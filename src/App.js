
// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContactPage } from './ContactPage';
import Contact from './Contact';
import  Charts  from './Charts';


function App() {
  return (
    <div className="App">
        
      <BrowserRouter>
      <ContactPage/>
        <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path='/charts' element={< Charts/>}/>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;

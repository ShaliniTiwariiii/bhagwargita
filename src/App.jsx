
import './App.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Chapter from './Components/Chapter';
import Shlok from './Components/Shlok';

function App() {
  return (
    <div className="App">
        < BrowserRouter >
        <Navbar />      
      <Routes>
        <Route path="/" element={<Chapter/>}></Route>
        <Route path="shlok" element={<Shlok/>}></Route>
       
      </Routes>
  
    </BrowserRouter>
    </div>
  );
}
export default App;


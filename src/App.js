import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Page4 from './pages/page4/Page4'
import Page1 from './pages/page1/Page1';
import Page2 from './pages/page2/Page2';
import Page3 from './pages/page3/Page3';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route index path='/' element={<Page1/>}/>
        <Route path='/page2' element={<Page2/>}/>
        <Route path='/page3' element={<Page3/>}/>
        <Route path='/page4' element={<Page4/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;

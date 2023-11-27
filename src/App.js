import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import Page1 from './pages/page1/Page1'
import Page4 from './pages/page4/Page4';

function App() {
  return (
    <Router>
      {/* <Page1/> */}
      <Page4/>
      <Routes>
        <Route></Route>
      </Routes>
    </Router>
  );
}

export default App;

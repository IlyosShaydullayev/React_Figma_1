import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Page4 from './pages/page4/Page4'

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

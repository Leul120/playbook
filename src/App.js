import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import PlaybookPage from './playBook';
import BroCodePage from './broCode';
import SuitUpTipsPage from './suit';
import LegendaryStoriesPage from './story';
import LegendaryQuizPage from './legendary';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/play' element={<PlaybookPage/>}/>
        <Route path='/bro' element={<BroCodePage/>}/>
        <Route path='/suit' element={<SuitUpTipsPage/>}/>
        <Route path='/story' element={<LegendaryStoriesPage/>}/>
        <Route path='/legendary' element={<LegendaryQuizPage/>}/>
              </Routes>
    </Router>
      
    </div>
  );
}

export default App;

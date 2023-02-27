import './App.css';
import Header from './components/header';
import Banner from './components/banner';
import BodyAo from './components/bodyAo';
import BodyQuan from './components/bodyQuan';
import BodyGiay from './components/bodyGiay';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BodyHomePage from './components/bodyHomePage';

function App() {
    return (
        <Router>
            <div >
                <Header />
                <Routes>
                    <Route path='/' element={<BodyHomePage />} />
                    <Route path='/ao' element={<BodyAo />} />
                    <Route path='/quan' element={<BodyQuan />} />
                    <Route path='/giay' element={<BodyGiay />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

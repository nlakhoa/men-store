import './App.css';
import Header from './components/header';
import BodyAo from './components/ao/bodyAo';
import BodyGiay from './components/giay/bodyGiay';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BodyHomePage from './components/homePage/bodyHomePage';
import Footer from './components/footer';
import BodyQuan from './components/quan/bodyQuan';
import DangNhap from './components/login/dangnhap';
import DangKy from './components/login/dangky';
import GioHang from './components/giohang/giohang';
import CongDong from './components/congdong/congdong';

function App() {
    return (
        <Router>
            <div >
                <Header />
                <Routes>
                    <Route path='/' element={<BodyHomePage />} />
                    <Route path='/ao' element={<BodyAo  />} />
                    <Route path='/quan' element={<BodyQuan />} />
                    <Route path='/giay' element={<BodyGiay />} />
                    <Route path='/dangnhap' element={<DangNhap />} />
                    <Route path='/dangky' element={<DangKy />} />
                    <Route path='/giohang' element={<GioHang />} />
                    <Route path='/congdong' element={<CongDong />} />
                </Routes>
                <Footer />
            </div>

        </Router>
    );
}

export default App;

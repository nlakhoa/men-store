import styled from 'styled-components';
import Logo from "./../images/logo/NHOM6.png"
import { Link } from "react-router-dom";

function Header() {
    return (
        // <>
        <div className="header">
            <div className="header__logo d-flex col-xl-12">
                <div href="#" className="div-img col-xl-3">
                    <Link to="/" >  <Link to="/" ><img src={Logo} alt="" /></Link> </Link>
                    <Link to="/" className="trangchu">Trang chủ</Link>
                </div>
                <div className="col-xl-6">
                    <div className="header__navbar ">
                        <Link to="/" className="trangchu">Trang chủ</Link>
                        <ul className="navbar__items d-flex">

                            <li className="navbar__item"> <Link to="/ao" className="">Áo thời trang</Link>

                            </li>
                            <li className="navbar__item"> <Link to="/quan" className="">Quần thời trang</Link>

                            </li>
                            <li className="navbar__item"> <Link to="/giay" className="">Giày</Link>

                            </li>
                            <li className="navbar__item"> <Link href="#" className="">Cộng đồng</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl-3 user">
                    <Link href="dangnhap" className=""> <i className="fas fa-user-circle icon-user"></i></Link>
                    <Link href="giohang" className=""><i className="fas fa-shopping-cart icon-cart"></i></Link>
                </div>
            </div>
        </div>
    );
}

export default Header;

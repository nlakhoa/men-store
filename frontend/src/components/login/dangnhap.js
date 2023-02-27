import styled from 'styled-components';
import { Link } from "react-router-dom";
import "./login.css"
function DangNhap() {
    return (
            <div class="containers">
                <h1>Đăng nhập</h1>
                <form>
                    <div class="form-controls">
                        <input type="email" id="email" placeholder="Email" />
                        <span></span>
                        <small></small>
                    </div>
                    <div class="form-controls">
                        <input type="password" id="password" placeholder="Password" />
                        <span></span>
                        <small></small>
                    </div>
                    <p class="submit" onclick="userLogin()">Login</p>
                    <div class="signup_link">Bạn chưa có tài khoản? <Link to="/dangky">Đăng ký</Link></div>
                </form>
            </div>
    );
}

export default DangNhap;

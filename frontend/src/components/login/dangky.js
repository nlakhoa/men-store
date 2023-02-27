import styled from 'styled-components';
import { Link } from "react-router-dom";
import "./login.css"
function DangKy() {
    return (
            <div class="containers">
                <h1>Đăng ký tài khoản</h1>
                <form>
                <div class="form-controls">
                        <input type="email" id="email" placeholder="Họ và tên" />
                        <span></span>
                        <small></small>
                    </div>
                    <div class="form-controls">
                        <input type="email" id="email" placeholder="Email" />
                        <span></span>
                        <small></small>
                    </div>
                    <div class="form-controls">
                        <input type="password" id="password" placeholder="Mật khẩu" />
                        <span></span>
                        <small></small>
                    </div>

                    <div class="form-controls">
                        <input type="password" id="password" placeholder="Nhập lại mật khẩu" />
                        <span></span>
                        <small></small>
                    </div>
                    <div class="form-controls">
                        <input type="password" id="password" placeholder="Địa chỉ" />
                        <span></span>
                        <small></small>
                    </div>
                    <p class="submit" onclick="userLogin()">Đăng ký</p>
                    <div class="signup_link">Bạn đã có tài khoản? <Link to="/dangky">Đăng nhập</Link></div>
                </form>
            </div>
    );
}

export default DangKy;

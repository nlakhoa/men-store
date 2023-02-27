import styled from "styled-components";
const Styled = styled.div`
    

.cart-items {
  padding: 12px;
  box-shadow: rgb(25 95 81 / 20%) 0px 0px 21px 0px;
  margin-right: 12px;
}

.cart-item {
  margin-bottom: 12px;
  padding: 6px;
  box-shadow: rgb(25 95 81 / 20%) 0px 0px 21px 0px;
  ;

}

.icon-tru {
  padding: 5px;
}

.fa-times {
  font-size: 24px;
  /* display: flex;
  align-items: center; */
  cursor: pointer;
}
.cart-right-items{
  max-width: 428px;
  overflow-y: scroll;
  margin-bottom: 38px;
}
.cart-right-header,
.cart-right-item {
  padding: 12px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  border-bottom: 1px solid;
  cursor: pointer;
  text-align: center;
}
.cart-right-item span{
margin: auto;
}
.cart__title{
  font-size: 28px;
    text-align: center;
    font-weight: bold;
}
.cart-items-right {
  padding: 12px;
  border: 1px solid #ccc;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 8px;

}

.cart-right-header .sumPrice .icon-clear,
.cart-right-item .sumPrice .icon-clear {
  position: absolute;
  top: -29px;
  right: -14px;
}

.cart-right-header .sumPrice .icon-clear:hover,
.cart-right-item .sumPrice .icon-clear:hover {
  opacity: 0.8;
  background-color: #ccc;
}

.cart-right-header .gr-icon-change,
.cart-right-item .gr-icon-change {
  padding: 12px 0;
  cursor: pointer;
}

.cart-right-header .gr-icon-change .icon-change,
.cart-right-item .gr-icon-change .icon-change {
  font-size: 24px;
  color: #53382c;
}

.cart-right-header .gr-icon-change .icon-disabled,
.cart-right-item .gr-icon-change .icon-disabled {
  color: #ccc;
}

.cart-right-header .gr-icon-change .current-value,
.cart-right-item .gr-icon-change .current-value {
  padding: 0 12px;
  line-height: 36px;
}

.cart-right-header,
.cart-right-footer {
  font-size: 24px;
  font-weight: bold;
}

.cart-right-footer {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  padding: 6px;
  width: 100%;
  bottom: 0;
}

.cart-right-header-item {
  font-size: 16px;
}

`

function GioHang() {
    return (
        <Styled>
            <div className="container">
                <div style={{ textAlign: "center" }}>
                    <h3 className="product__ne title-product1"><ins>Giỏ Hàng Của Bạn</ins></h3>
                </div>
                <div className="d-flex cart col-xl-12">
                    <div className="cart-items col-xl-7" id="hinhanhdonhang">


                    </div>
                    <div className="col-xl-5 cart-items-right">
                        <p className="cart__title">Thông tin đơn hàng</p>
                        <ul className="cart-right-items" id="thongtindonhang">
                            <li className="cart-right-header col-xl-12">
                                <span className="cart-right-header-item col-xl-4">Tên</span><span
                                    className="cart-right-header-item col-xl-3">Số lượng</span><span
                                        className="cart-right-header-item col-xl-2">Size</span><span
                                            className="cart-right-header-item col-xl-3">Tổng</span>
                            </li>

                        </ul>
                        <div className="cart-right-footer flex"><span>Tổng tiền:</span><span id="sum-value"></span>
                        </div>
                        <div className="product__shopnow justify-content-center">
                            <button className="shopnow2" >Mua ngay</button>
                        </div>
                    </div>
                </div>
            </div>
        </Styled>
    );
}

export default GioHang;
